import UTitle from './title'
import UDialog from './dialog'
import USelect from './form/select'

export const Title = UTitle;
export const Dialog = UDialog;
export const Select = USelect;

const components = {
    Title,
    Dialog,
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