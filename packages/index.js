import Title from './title'

const components = {
    Title
}

const install = function (Vue, options) {
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