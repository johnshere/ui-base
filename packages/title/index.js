import Title from './index.vue'
/* istanbul ignore next */
Title.install = function(Vue) {
    Vue.component(Title.name, Title);
  };

export default Title;