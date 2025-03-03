import {VUE2_PKG_NAME, VUE3_PKG_NAME} from '@shared/config/constance';

// 判断当前编译的目标版本是否是 Vue2
export const IS_VUE2 = String(process.env.VUE_VERSION) === '2';

// 发布到 npm 上的包名 ui-base-vue2 & ui-base-vue3
export const PKG_NAME = IS_VUE2 ? VUE2_PKG_NAME : VUE3_PKG_NAME;
