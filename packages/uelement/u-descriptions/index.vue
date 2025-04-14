<template>
    <el-descriptions
        v-bind="$attrs"
        :size="size"
        :content-style="contentStyle_"
        :label-style="labelStyle_"
        v-on="listeners"
    >
        <template v-for="slot in Object.keys($slots)" #[slot]>
            <slot :name="slot" />
        </template>
    </el-descriptions>
</template>
<script>
import listeners from '@src/utils/listeners.ts';
import { Descriptions } from 'element-ui'
import 'element-ui/packages/theme-chalk/src/descriptions.scss';

export default {
  name: "UDescriptions",
  components: {
    [Descriptions.name]: Descriptions
  },
  props: {
    contentStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
    labelStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
    size: {
      type: String,
      default() {
        if (process.env.VUE_VERSION === '3') {
          return 'default';
        }
        return "medium";
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    contentStyle_() {
      if (!this.contentStyle.width && !this.labelStyle.width) {
        return Object.assign({ width: "400px" }, this.contentStyle);
      }
      return this.contentStyle;
    },
    labelStyle_() {
      if (!this.contentStyle.width && !this.labelStyle.width) {
        return Object.assign({ width: "200px" }, this.labelStyle);
      }
      return this.labelStyle;
    },
    listeners(){
      return listeners.call(this)
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
:deep(.required) {
  position: relative;
  padding-left: 20px !important;
  &::before {
    position: absolute;
    left: 12px;
    top: 50%;
    margin-top: -14px;
    content: "*";
    color: #fe3434;
  }
}
:deep(.el-descriptions-item__label.is-bordered-label),
:deep(.eu-descriptions-item__label.is-bordered-label) {
  background: #f6f7fb;
  color: #606266;
}
</style>
