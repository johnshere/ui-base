
import chalk from 'chalk';
import consola from 'consola';
import del from 'del';
import glob from 'fast-glob';
import fs from 'fs';
import fsPromises from 'fs/promises';
import { dest, src } from 'gulp';
import path from 'path';
import { Project, ResolutionHost, SourceFile, ts } from 'ts-morph';
import * as vue2Compiler from 'vue2/compiler-sfc';
import * as vue3Compiler from 'vue3/compiler-sfc';
import { buildConfig, BuildModule } from '../config';
import { IS_VUE2 } from '../utils/constance';
import { excludeFiles } from '../utils';
import {
    builderPath,
    distPath,
    packagesPath,
    compsSrcPath,
} from '../utils/paths';

const GENERATE_TYPES_DIR = path.resolve(distPath, 'types');

/**
 * 生成类型定义，包括源码和依赖库的类型定义。
 */
export async function generateTypesDefinitions() {
    const project = new Project({
        compilerOptions: {
            emitDeclarationOnly: true,
            outDir: GENERATE_TYPES_DIR,
            baseUrl: packagesPath,
            preserveSymlinks: true,
        },
        tsConfigFilePath: path.resolve(builderPath, 'tsconfig.build.json'),
        skipAddingFilesFromTsConfig: true,
        resolutionHost: customModuleResolution,
    });

    const sourceFiles = await addSourceFile(project);
    consola.success('Added source files');

    typeCheck(project);
    consola.success('Type check passed!');

    await project.emit({
        emitOnlyDtsFiles: true,
    });

    // 生成 dts
    const tasks = sourceFiles.map(async sourceFile => {
        const relativePath = path.relative(
            packagesPath,
            sourceFile.getFilePath()
        );
        consola.trace(
            chalk.yellow(
                `Generating definition for file: ${chalk.bold(relativePath)}`
            )
        );

        const emitOutput = sourceFile.getEmitOutput();
        const emitFiles = emitOutput.getOutputFiles();
        if (emitFiles.length === 0) {
            throw new Error(`Emit no file: ${chalk.bold(relativePath)}`);
        }

        // 重写生成的声明文件中的内容
        const tasks = emitFiles.map(async outputFile => {
            const filepath = outputFile.getFilePath();
            await fsPromises.mkdir(path.dirname(filepath), {
                recursive: true,
            });

            // 修改入口文件的路径
            await fsPromises.writeFile(
                filepath,
                outputContentReplacer({
                    content: outputFile.getText(),
                    sourceFile,
                }),
                'utf8'
            );

            consola.success(
                chalk.green(
                    `Definition for file: ${chalk.bold(relativePath)} generated`
                )
            );
        });

        await Promise.all(tasks);
    });

    await Promise.all(tasks);
}

/**
 * ts-morph 自定义模块解析器
 */
function customModuleResolution(
    moduleResolutionHost: ts.ModuleResolutionHost,
    getCompilerOptions: () => ts.CompilerOptions
): ResolutionHost {
    return {
        resolveModuleNames(moduleNames, containingFile) {
            let containingFileRealPath = containingFile;
            // 由于项目使用了 pnpm，npm 包实际是以软链的方式链接在 node_modules 下的，因此在 resolve 前需要转为真实路径
            try {
                containingFileRealPath = fs.realpathSync(
                    containingFile,
                    'utf-8'
                );
            } catch {
                // 找不到没关系，因为找不到的文件是在 Project 中存储的虚拟文件
            }
            moduleNames = moduleNames
                .map(removeTsExtension)
                .map(mapModuleAlias);
            // console.log('=========================');
            // console.log(
            //     '🚀 ~ resolveModuleNames ~ moduleNames:',
            //     moduleNames
            // );
            // console.log(
            //     '🚀 ~ resolveModuleNames ~ containingFile:',
            //     containingFile
            // );
            // console.log(
            //     '🚀 ~ resolveModuleNames ~ containingFileRealPath:',
            //     containingFileRealPath
            // );
            // console.log('=========================');
            const compilerOptions = getCompilerOptions();
            const resolvedModules: ts.ResolvedModule[] = [];
            for (const moduleName of moduleNames) {
                const result = ts.resolveModuleName(
                    moduleName,
                    containingFileRealPath,
                    compilerOptions,
                    moduleResolutionHost
                );
                if (result.resolvedModule) {
                    resolvedModules.push(result.resolvedModule);
                } else {
                    // 无法解析的模块不影响 dts 的生成，所以只是警告（如果是非 assets 模块则不需要理会，其他模块最好排查一下错误原因）
                    if (!/\.(css|styl|style)/.test(moduleName)) {
                        // 太多了，隐藏
                        // consola.warn(
                        //     `[types definition] Cannot resolve module: ${moduleName}`
                        // );
                    }
                    resolvedModules.push(undefined as any);
                }
            }

            return resolvedModules;
        },
    };
}

/**
 * 移除 ts 文件后缀
 */
function removeTsExtension(moduleName: string) {
    if (moduleName.slice(-3).toLowerCase() === '.ts') {
        return moduleName.slice(0, -3);
    }
    return moduleName;
}

/**
 * 将模块名映射为对应的包名
 * !!! 注意：这里修改 moduleName 是为了让 ts-morph 正确解析依赖，并不会修改最终输出代码的模块名称
 * !!! 输出代码的模块名称仍然会按照原有名称输出，如果需要修改输出的模块名，在下面的 outputContentReplacer 中修改
 */
function mapModuleAlias(moduleName: string) {
    // 根据构建目标修正 Vue 索引的版本
    if (['vue', 'vue2', 'vue3'].includes(moduleName)) {
        moduleName = IS_VUE2 ? 'vue2' : 'vue3';
    }
    // 根据构建目标修正 Vue 索引的版本
    if (['element-ui', 'element-plus'].includes(moduleName)) {
        moduleName = IS_VUE2 ? 'element-ui' : 'element-plus';
    }
    // 正确索引到 @src
    moduleName = moduleName.replace('@src', compsSrcPath);
    return moduleName;
}

/**
 * 向 Project 中添加源文件
 */
async function addSourceFile(project: Project) {
    const globAnyFile = '**/*.{js?(x),ts?(x),vue}';

    // 获取 projects 目录下的所有 js ts vue 文件
    const filePaths = excludeFiles(
        await glob([globAnyFile, '!*.d.ts'], {
            cwd: compsSrcPath,
            absolute: true,
            onlyFiles: true,
        })
    );

    // 负责缓存所有 ts 文件
    const sourceFiles: SourceFile[] = [];
    await Promise.all([
        // 处理 packages 下的文件
        ...filePaths.map(async file => {
            // 提取 vue 文件
            if (file.endsWith('.vue')) {
                const content = await fsPromises.readFile(file, 'utf-8');
                const sfc = IS_VUE2
                    ? vue2Compiler.parse({
                        source: content,
                    })
                    : vue3Compiler.parse(content);
                const descriptor = IS_VUE2
                    ? (sfc as vue2Compiler.SFCDescriptor)
                    : (sfc as vue3Compiler.SFCParseResult).descriptor;
                const { script, scriptSetup } = descriptor;
                if (script || scriptSetup) {
                    let content = script?.content ?? '';
                    if (scriptSetup) {
                        let compiled: any = '';
                        if (IS_VUE2) {
                            compiled = vue2Compiler.compileScript(
                                descriptor as vue2Compiler.SFCDescriptor,
                                {
                                    id: 'xxx',
                                }
                            );
                        } else {
                            compiled = vue3Compiler.compileScript(
                                descriptor as vue3Compiler.SFCDescriptor,
                                {
                                    id: 'xxx',
                                }
                            );
                        }
                        content += compiled.content;
                    }

                    const lang = scriptSetup?.lang || script?.lang || 'js';
                    // 根据 vue sfc 创建对应的 ts 文件，并存储 sourceFile
                    const sourceFile = project.createSourceFile(
                        `${path.relative(process.cwd(), file)}.${lang}`,
                        content
                    );
                    sourceFiles.push(sourceFile);
                }
            } else {
                // 普通文件直接添加到 project 中
                const sourceFile = project.addSourceFileAtPath(file);
                sourceFiles.push(sourceFile);
            }
        }),
    ]);
    return sourceFiles;
}

/**
 * 替换输出的文件内容
 */
export const outputContentReplacer = (option: {
    content: string;
    sourceFile: SourceFile;
}) => {
    const { content, sourceFile } = option;
    const getAliasRealPath = (aliasTo: string) => {
        return path.relative(path.dirname(sourceFile.getFilePath()), aliasTo);
    };

    return (
        content
            /**
             * 替换 vue 别名:
             * - import('vue2') => import('vue')
             * - import("vue3/xxx/xxx") => import("vue/xxx/xxx")
             * - import("@vue3/shared") => import("vue/shared")
             */
            .replace(
                /(['"]@?)(vue[23])(\/.*)?(['"])/g,
                (match, p1, p2, p3, p4) => {
                    return `${p1}vue${p3 || ''}${p4}`;
                }
            )
            // 替换 @src 别名
            .replace(/@src\//g, getAliasRealPath(compsSrcPath) + '/')
    );
};

/**
 * 检查类型声明
 */
function typeCheck(project: Project) {
    const diagnostics = project.getPreEmitDiagnostics();
    if (diagnostics.length > 0) {
        consola.error(
            project.formatDiagnosticsWithColorAndContext(diagnostics)
        );
        const err = new Error('Failed to generate dts.');
        consola.error(err);
        throw err;
    }
}

/**
 * 将类型声明文件拷贝到 js 文件下
 */
export async function copyTypes() {
    function copyTypes(module: BuildModule) {
        return new Promise(resolve => {
            src([
                path.join(GENERATE_TYPES_DIR, '**/*.d.ts'),
                path.join(compsSrcPath, '**/*.d.ts'),
            ])
                .pipe(dest(buildConfig[module].path))
                .on('end', resolve);
        });
    }

    await Promise.all([copyTypes('esm'), copyTypes('cjs')]);
    // await del(GENERATE_TYPES_DIR, { force: true });
}
