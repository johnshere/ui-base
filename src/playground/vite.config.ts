import {defineConfig} from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import vue3 from '@vitejs/plugin-vue';
import * as vue2Compiler from 'vue2/compiler-sfc';
import * as vue3Compiler from 'vue3/compiler-sfc';
import path from 'path';
import transformToVue3 from '../builder/utils/transformToVue3';

const IS_VUE2 = process.env.VUE_VERSION === '2';

// https://vitejs.dev/config/
export default defineConfig({
    envPrefix: 'VUE_', // 确保仅加载以 VITE_ 开头的环境变量
    plugins: [
        transformToVue3,
        IS_VUE2
            ? vue2({
                  compiler: vue2Compiler as any,
              })
            : vue3({
                  compiler: vue3Compiler,
              }),
        {
            name: 'html-rewriter',
            transformIndexHtml(html: string) {
                return html.replace(/%VUE_VERSION%/g, IS_VUE2 ? '2' : '3');
            },
        },
    ],
    resolve: {
        alias: {
            'element-ui': IS_VUE2 ? 'element-ui' : 'element-plus',
            vue: IS_VUE2 ? 'vue2' : 'vue3',
            'vue-router': IS_VUE2 ? 'vue-router3' : 'vue-router4',
            '@src': path.resolve(__dirname, '../../packages/'),
        },
    },
});
