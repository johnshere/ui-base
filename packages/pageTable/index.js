import PageTable from './index.vue'
/* istanbul ignore next */
PageTable.install = function(Vue) {
    Vue.component(PageTable.name, PageTable);
  };

export default PageTable;