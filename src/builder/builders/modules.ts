import glob from 'fast-glob';
import { OutputOptions, rollup, RollupOptions } from 'rollup';
import { buildConfig } from '../config';
import { excludeFiles } from '../utils';
import { packagesPath } from '../utils/paths';
import { generateCommonPluginConfig, generateExternal } from '../utils/rollup';
import { PACKAGES_ROOT_PATH } from '@shared/config/paths';
/**
 * 构建可以按需引入的 module
 */
export async function buildModules() {
    const input = excludeFiles(
        await glob('**/*.{js,ts,tsx,vue}', {
            cwd: packagesPath,
            absolute: true,
            onlyFiles: true,
        })
    );

    const rollupOption: RollupOptions = {
        input,
        plugins: [...generateCommonPluginConfig()],
        external: await generateExternal({ full: false })
    };

    const outputOptions = Object.values(buildConfig).map(config => {
        return {
            format: config.format,
            dir: config.path,
            exports: config.format === 'cjs' ? 'named' : undefined,
            // preserveModules: true, // 保留原有的目录结构
            // preserveModulesRoot: entryFilePath, // 入口文件的路径，会从 output.dir 中剥离出来
            sourcemap: false,
            // entryFileNames: `[name].${config.ext}`,
            entryFileNames(info) {
                let id = info.facadeModuleId || ''
                if (id.includes('node_modules')) {
                    return `node-modules.${config.ext}`;
                }
                if (id.includes('top')) {
                    console.log(id)
                }
                id = id.replace(/\.(js|ts)/, '').replace(PACKAGES_ROOT_PATH, '')
                id = id.split(/\\/).filter(Boolean).join('/')
                return `${id}.${config.ext}`;
            },
            globals: {
                vue: 'Vue',
                'element-ui': 'element-ui',
                'element-plus': 'element-plus',
                'tinymce': 'tinymce',
                '@tinymce/tinymce-vue': '@tinymce/tinymce-vue',
                'ui-base': 'ui-base'
            }
        } as OutputOptions;
    });

    const bundle = await rollup(rollupOption);
    return Promise.all(outputOptions.map(option => bundle.write(option)));
}
