import component from "./input.vue";
/* istanbul ignore next */
component.install = function (Vue) {
  Vue.component(component.name, component);
};

export default component;
