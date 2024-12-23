import Vue from 'vue2';
import './style.css';
import App from './App.vue';
import {router} from './router';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI)

new Vue({
    render: h => h(App as any),
    // @ts-ignore
    router,
}).$mount('#app-content');
