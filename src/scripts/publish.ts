/* eslint-disable @typescript-eslint/no-require-imports */
import { select } from '@inquirer/prompts';
import { PKG_PREFIX, VUE2_PKG_NAME, VUE3_PKG_NAME } from '@shared/config/constance';
import { PACKAGES_ROOT_PATH, PROJECT_OUTPUT_PATH, PROJECT_ROOT_PATH } from '@shared/config/paths';
import { genNextVersion, getVersion } from '@shared/utils';
import chalk from 'chalk';
import consola from 'consola';
import execa from 'execa';
import fs from 'fs';
import path from 'path';

const DEPLOY_PACKAGES: { name: string; path: string; version: string }[] = [
    {
        name: VUE2_PKG_NAME,
        path: path.join(PROJECT_OUTPUT_PATH, VUE2_PKG_NAME),
        version: getVersion(),
    },
    {
        name: VUE3_PKG_NAME,
        path: path.join(PROJECT_OUTPUT_PATH, VUE3_PKG_NAME),
        version: getVersion(),
    },
];

const VERSION_OPTIONS = ['prerelease', 'patch', 'minor'] as const;

/**
 * 主执行函数
 */
async function main() {
    // 选择是否需要build
    const isBuild = await select({
        message: '是否需要构建组件库？',
        choices: [
            {
                name: '是',
                value: true,
            },
            {
                name: '否',
                value: false,
            },
        ],
    });
    if (isBuild) {
        buildComponents();
    }
    await publishComponents();
}

main();

/**
 * 发布 npm 包
 */
async function publishNpmPackage(packageName: string, version?: string) {
    const pkgInfo = DEPLOY_PACKAGES.find(item => item.name === packageName);
    if (!pkgInfo) {
        throw new Error(`DEPLOY_PACKAGES 无法找到 ${packageName} 相关的信息`);
    }
    const pkgPath = pkgInfo.path;
    if (!fs.existsSync(pkgPath)) {
        throw new Error(`无法查找到 ${pkgPath} 目录，请确认是否已经编译出内容`);
    }
    const pkgfile = require(path.join(PACKAGES_ROOT_PATH, 'package.json'));
    if (!pkgfile) {
        throw new Error(`无法查找到 ${packageName} 对应的 package.json`);
    }
    const pkgJSON = JSON.parse(JSON.stringify(pkgfile))

    // 覆写版本号
    const currentPkgVersion = pkgJSON.version;
    let selectedVersion = version;
    if (!selectedVersion) {
        selectedVersion = (await select({
            message: `请选择包版本的升级类型（当前版本：${currentPkgVersion}）`,
            choices: VERSION_OPTIONS.map(key => {
                const nextVersion = genNextVersion(currentPkgVersion, key);
                return {
                    name: key,
                    value: nextVersion,
                    description: `选择此选项后，将生成的新版本号：${nextVersion}`,
                };
            }),
        })) as string;
    }
    pkgJSON.version = selectedVersion;
    delete pkgJSON.dependencies['element-ui']
    delete pkgJSON.dependencies['element-plus']
    const bak = packageName === VUE2_PKG_NAME ? pkgJSON._vue2 : pkgJSON._vue3
    Object.keys(bak).forEach(key => {
        if (pkgJSON[key]) {
            if (typeof pkgJSON[key] === 'string') {
                pkgJSON[key] = bak[key]
            } else if(Array.isArray(pkgJSON[key])) {
                pkgJSON[key] = pkgJSON[key].concat(bak[key])
            } else {
                Object.assign(pkgJSON[key], bak[key])
            }
        } else {
            pkgJSON[key] = bak[key]
        }
    })
    delete pkgJSON._vue2;
    delete pkgJSON._vue3;
    fs.writeFileSync(
        path.join(pkgPath, 'package.json'),
        JSON.stringify(pkgJSON, null, 4),
    );

    // 执行 npm 发布指令
    let tag: string
    if (selectedVersion.includes('-')) {
        tag = packageName === VUE3_PKG_NAME ? 'next-beta' : 'latest-beta'
    } else {
        tag = packageName === VUE3_PKG_NAME ? 'next' : 'latest'
    }
    execa.commandSync(
        `pnpm publish --access public --no-git-checks --tag ${tag}`,
        {
            cwd: pkgPath,
            stdio: 'inherit',
        },
    );

    consola.success(
        `🥳 ${packageName} 发布成功，版本号：${chalk.green(selectedVersion)}`,
    );
}

/**
 * 合并发布 ui-base-vue2 和 ui-base-vue3
 */
async function publishComponents() {
    const vue2PkgInfo = DEPLOY_PACKAGES.find(
        item => item.name === VUE2_PKG_NAME,
    );
    const vue3PkgInfo = DEPLOY_PACKAGES.find(
        item => item.name === VUE3_PKG_NAME,
    );
    if (!vue2PkgInfo || !vue3PkgInfo) {
        throw new Error(
            `DEPLOY_PACKAGES 无法找到 ${VUE2_PKG_NAME} 或 ${VUE3_PKG_NAME} 相关的信息`,
        );
    }
    if (
        !fs.existsSync(path.resolve(vue2PkgInfo.path)) ||
        !fs.existsSync(path.resolve(vue3PkgInfo.path))
    ) {
        throw new Error(
            `未同时找到 ${VUE2_PKG_NAME} 与 ${VUE3_PKG_NAME} 目录，请确认是否已经编译出内容`,
        );
    }
    const pkj = require(path.join(PACKAGES_ROOT_PATH, 'package.json'));


    const selectedVersion = (await select({
        message: '请选择包版本的升级类型：',
        choices: VERSION_OPTIONS.map(key => {
            const nextVersion = genNextVersion(pkj.version, key);
            const nvs = nextVersion.split('.').slice(1);
            const nextVersion2 = `2.${nvs.join('.')}`
            const nextVersion3 = `3.${nvs.join('.')}`
            return {
                name: key,
                value: `${nextVersion}|${nextVersion2}|${nextVersion3}`,
                description:
                    `当前版本号：${PKG_PREFIX} ${chalk.red(pkj.version)}, ` +
                    '\n' +
                    `选择此选项后，将生成的新版本号：${PKG_PREFIX}@${chalk.red(nextVersion2)}, ` +
                    `${PKG_PREFIX}@${chalk.red(nextVersion3)}`,
            };
        }),
    })) as string;
    const [nextVersion, nextVersion2, nextVersion3] = selectedVersion.split('|');
    
    // 选择是否需要build
    const vueSelect = await select({
        message: '发布vue版本？',
        choices: [
            {
                name: 'vue3 + vue2',
                value: 0,
            },
            {
                name: 'vue3',
                value: 1,
            },
            {
                name: 'vue2',
                value: 2,
            },
        ],
    }) as 0 | 1 | 2;
    const successTip = [] as string[];
    if (vueSelect !== 1) {
        await publishNpmPackage(VUE2_PKG_NAME, nextVersion2);
        successTip.push(chalk.green(nextVersion2));
    }
    if (vueSelect !== 2) {
        await publishNpmPackage(VUE3_PKG_NAME, nextVersion3);
        successTip.push(chalk.green(nextVersion3));
    }
    pkj.version = nextVersion;
    fs.writeFileSync(
        path.join(PACKAGES_ROOT_PATH, 'package.json'),
        JSON.stringify(pkj, null, 4),
    );
    consola.success(`🥳 组件库发布成功，版本号：${successTip.join('|')}`);
    consola.success(`🥳 组件库信息查看，执行：${chalk.green(`npm view ui-base`)}`);
    consola.success(`🥳 组件库安装vue2：ui-base@latest(@latest-beta)；vue3安装：ui-base@next(@next-beta)`);
}

/** 构建组件库 */
function buildComponents() {
    consola.info('正在构建组件');
    execa.commandSync('pnpm run build', {
        cwd: PROJECT_ROOT_PATH,
        stdio: 'inherit',
    });
}
