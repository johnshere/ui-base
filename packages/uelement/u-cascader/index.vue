<template>
  <el-cascader v-bind="$attrs" v-on="$listeners">
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot">
      <slot :name="slot" />
    </template>
  </el-cascader>
</template>
<script>
export default {
  name: "UCascader",
};
</script>
<style lang="less" scoped>
.el-cascader {
  width: 100%;
}
</style>
