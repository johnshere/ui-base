import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const contextInfo = require.context('../examples', false, /.vue$/);
let routerAry = []
contextInfo.keys().forEach(fileName => {
  const pathConfig = contextInfo(fileName)
  let path = "/" + fileName.substring(2, fileName.length - 4)
  routerAry.push({
    path,
    component: pathConfig.default
  })
})

const routes = [
  ...routerAry
];

const router = new VueRouter({
  routes,
});

export default router;
