<template>
  <el-descriptions
    size="medium"
    v-bind="$attrs"
    :content-style="contentStyle_"
    :label-style="labelStyle_"
    v-on="$listeners"
  >
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot">
      <slot :name="slot" />
    </template>
  </el-descriptions>
</template>
<script>
export default {
  name: "UDescriptions",
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
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
::v-deep .required {
  position: relative;
  padding-left: 20px !important;
}
::v-deep .required::before {
  position: absolute;
  left: 12px;
  top: 50%;
  margin-top: -14px;
  content: "*";
  color: #fe3434;
}
::v-deep .el-descriptions-item__label.is-bordered-label {
  background: #f6f7fb;
  color: #606266;
}
</style>
