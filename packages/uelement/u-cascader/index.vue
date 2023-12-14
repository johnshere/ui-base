<template>
  <el-cascader v-bind="$attrs" ref="cascader" v-on="$listeners">
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot">
      <slot :name="slot" />
    </template>
  </el-cascader>
</template>
<script>
export default {
  name: "UCascader",
  methods: {
    getCheckedNodes() {
      return this.$refs.cascader.getCheckedNodes();
    },
  },
};
</script>
<style lang="less" scoped>
.el-cascader {
  width: 100%;
}
</style>
