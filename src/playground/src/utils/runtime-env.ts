// 判断当前编译的目标版本是否是 Vue2
export const IS_VUE2 = String(import.meta.env.VUE_VERSION) === '2';