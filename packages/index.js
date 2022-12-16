import UTitle from './title'
import UDialog from './dialog'
import PageTable from './pageTable'

export const Title = UTitle;
export const Dialog = UDialog;
export const PageTable = PageTable;

const components = {
    Title,
    Dialog,
    PageTable
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