/**
 * 金额显示转换，三位一逗号，保留两位小数
 * @param {*} value 
 * @returns 
 */
export function AmountNumber(value, decimalLength = 2, formatLeft = true) {
    if (!value && value !== 0) return '';
    value = value + ''
    let minus = value.startsWith('-') ? '-' : '';

    value = value.replace(/[^\d.]/g, ''); // 清除"数字"和"."以外的字符
    value = value.replace(/^\./g, ''); // 验证第一个字符是数字而不是.
    value = value.replace(/\.{2,}/g, '.'); // 只保留第一个. 清除多余的
    value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.'); // 保证.只出现一次，而不能出现两次以上
    value = (+value).toFixed(decimalLength); // 只能输入两个小数

    if (formatLeft && value.includes('.')) {
        let left = parseInt(value.split('.')[0]).toString();
        let len = left.length;
        if (len > 3) {
            let r = len % 3;
            left =
                r > 0
                    ? left.slice(0, r) +
                    ',' +
                    left.slice(r, len).match(/\d{3}/g).join(',')
                    : left.slice(r, len).match(/\d{3}/g).join(',');
        }
        value = left + '.' + value.split('.')[1];
    }
    return minus + value;
}