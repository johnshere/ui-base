import Vue from "vue";
import router from "./router";
import Title from "../packages/title/index";
import UButton from "../packages/uelement/u-button";
Vue.component('UTitle', Title);
Vue.component('UButton', UButton);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '../packages/style/index.less'

Vue.config.productionTip = false;

Vue.use(ElementUI)

new Vue({
  router,
  render: (h) => <router-view />
}).$mount("#app");
