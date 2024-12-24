import { PACKAGES_ROOT_PATH } from '@shared/config/paths';
import fs from 'fs';
import path from 'path';

/**
 * 获取 package.json 文件内容
 */
export function getPackageFileJson() {
    try {
        const pkgPath = path.join(PACKAGES_ROOT_PATH, 'package.json')
        if (!fs.existsSync(pkgPath)) {
            return
        }
        const pkgContent = fs.readFileSync(pkgPath, 'utf-8')
        return JSON.parse(pkgContent) as Record<string, any>;
    } catch (error) {
        console.log(error)
        throw error
    }
}

/**
 * 获取指定包版本信息
 */
export function getVersion() {
    const json = getPackageFileJson()
    if (!json) {
        return
    }
    return json.version as string;
}

/**
 * 生成当前版本的下一个版本号
 * genNextVersion("0.0.0", "patch") => 0.0.1
 * genNextVersion("0.0.1", "prerelease") => 0.0.2-0
 * genNextVersion("0.0.2-0", "prerelease") => 0.0.2-1
 * genNextVersion("0.0.2-1", "patch") => 0.0.2
 * genNextVersion("0.0.2", "minor") => 0.1.0
 */
export function genNextVersion(
    packageVersion: string,
    /**
     * 升级类型
     * 与 npm version 不一致的是删除了 premajor、preminor、prepatch 三个选项
     * 调用 prerelease 实际上就是 npm version prepatch + npm version prerelease
     */
    upgradeType: 'major' | 'minor' | 'patch' | 'prerelease'
) {
    // 匹配 1.0.0（正式版本号） 1.0.0-1（prerelease 版本号）
    const versionReg = /^\d+\.\d+\.\d+(-\d+)?$/;
    if (packageVersion === undefined || !versionReg.test(packageVersion)) {
        throw new Error(
            `${packageVersion} 版本信息格式错误，请检查 version.json`
        );
    }

    // 提取版本号
    const [mainVersion, preVersion] = packageVersion.split('-');
    const [major, minor, patch] = mainVersion.split('.');

    // 发布 prerelease 版本
    if (upgradeType === 'prerelease') {
        // 当前版本号是 prerelease 版本，则直追加尾部的 pre 版本号
        if (preVersion) {
            return `${mainVersion}-${Number(preVersion) + 1}`;
        }
        // 当前版本号不是 prerelease 版本，则追加尾部的 pre 版本号的同时，升级 patch 版本号
        else {
            return `${major}.${minor}.${Number(patch) + 1}-0`;
        }
    } else {
        switch (upgradeType) {
            case 'major':
                return `${Number(major) + 1}.0.0`;
            case 'minor':
                return `${major}.${Number(minor) + 1}.0`;
            case 'patch':
                // 如果当前是 prerelease 版本，则升级 patch 就只是移除 pre 版本号
                return `${major}.${minor}.${preVersion ? Number(patch) : Number(patch) + 1}`;
        }
    }
}
