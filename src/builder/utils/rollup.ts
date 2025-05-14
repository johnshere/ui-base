/* eslint-disable @typescript-eslint/no-require-imports */

import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue3 from '@vitejs/plugin-vue';
import vue2 from '@vitejs/plugin-vue2';
import path from 'path';
import esbuild from 'rollup-plugin-esbuild';
// import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss'
import postcssurl from 'postcss-url';
import postcssImport from 'postcss-import';
import * as vue2Compiler from 'vue2/compiler-sfc';
import * as vue3Compiler from 'vue3/compiler-sfc';
import { esbuildConfig, nodeResolveExt } from '../config';
import { IS_VUE2, PKG_NAME } from './constance';
import { packagesPath } from './paths';
// import { PROJECT_OUTPUT_PATH } from '@shared/config/paths';
// import { VUE2_PKG_NAME, VUE3_PKG_NAME } from '@shared/config/constance';
import transformToVue3 from './transformToVue3';
import autoprefixer from 'autoprefixer';
function getPackageDependencies(
    pkgPath: string,
): Record<'dependencies' | 'peerDependencies', string[]> {
    const manifest = require(pkgPath);
    const { dependencies = {}, peerDependencies = {} } = manifest;
    return {
        dependencies: Object.keys(dependencies),
        peerDependencies: Object.keys(peerDependencies),
    };
}

export const generateExternal = async (options: { full: boolean }) => {
    const { dependencies, peerDependencies } = getPackageDependencies(
        path.resolve(packagesPath, 'package.json'),
    );

    return (id: string) => {
        // if (id.includes('node_modules')) return true;
        const packages: string[] = peerDependencies;
        // if (!options.full) {
        //     packages.push('vue', '@vue', ...dependencies);
        // }
        packages.push('vue', '@vue', ...dependencies);

        return [...new Set(packages)].some(
            pkg => id === pkg || id.startsWith(`${pkg}/`),
        );
    };
};

/**
 * 生成 module 和 full-bundle 构建器的通用插件配置
 */
export function generateCommonPluginConfig() {
    return [
        transformToVue3,
        alias({
            entries: [
                {
                    find: '@src',
                    replacement: packagesPath,
                },
                {
                    find: 'element-ui',
                    replacement: IS_VUE2 ? 'element-ui' : 'element-plus',  // 保留路径后缀
                },  
            ],
        }),
        (IS_VUE2
            ? vue2({
                // compiler: vue2Compiler as any,
                compiler: {
                    ...vue2Compiler,
                    compileStyleAsync: (opts: any) => {
                        opts.preprocessLang = 'scss'
                        return vue2Compiler.compileStyleAsync(opts);
                    },
                } as any,
            })
            : vue3({
                // compiler: vue3Compiler as any,
                compiler: {
                    ...vue3Compiler,
                    compileStyleAsync: (opts: any) => {
                        opts.preprocessLang = 'scss'
                        return vue3Compiler.compileStyleAsync(opts);
                    },
                } as any,
            })) as any,
        postcss({
            extract: false,
            modules: false,
            extensions: ['.css', '.scss'], // 明确支持的文件扩展名
            // use: ['sass'],
            // include: /\.vue/,
            plugins: [
                postcssImport(),
                autoprefixer(),
                postcssurl({ url: 'inline' }),
            ]
        }),
        image(),
        nodeResolve({
            extensions: nodeResolveExt,
        }),
        commonjs(),
        esbuild(esbuildConfig),
        // terser(),
    ];
}
