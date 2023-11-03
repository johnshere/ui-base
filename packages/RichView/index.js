import component from '../RichEditor/view.vue'
/* istanbul ignore next */
component.install = function(Vue) {
    Vue.component(component.name, component);
  };

export default component;