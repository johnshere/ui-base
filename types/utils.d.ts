/**
 * 金额显示转换，三位一逗号，保留两位小数
 * @param {*} value 
 * @param {*} decimalLength 默认小数保留位数
 * @param {*} formatLeft 是否格式化小数点左侧
 * @returns 
 */
  export declare function AmountNumber (value:number|string,decimalLength?:number,formatLeft?:boolean):string