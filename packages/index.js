import UTitle from './title'
import UDialog from './dialog'
import UPageTable from './pageTable'
import UTop from './top';
import USelect from './form/select'

export const Title = UTitle;
export const Dialog = UDialog;
export const PageTable = UPageTable;
export const Top = UTop
export const Select = USelect;

const components = {
    Title,
    Dialog,
    PageTable,
    Top,
    Select
}

const install = function (Vue, options) {
    Vue.prototype.$UBase = {
        size: opts.size || ''
    };

    const componentKeys = Object.keys(components)
    componentKeys.forEach(function (key) {
        const component = components[key]

        Vue.component(component.name, component)
    })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: require('../package.json').version,
    install,
    ...components
}