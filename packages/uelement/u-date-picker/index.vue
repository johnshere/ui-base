<template>
  <el-date-picker v-bind="$attrs" v-on="$listeners">
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot">
      <slot :name="slot" />
    </template>
  </el-date-picker>
</template>
<script>
export default {
  name: "UDatePicker",
};
</script>
<style lang="scss" scoped>
.el-date-editor {
  width: 100%;
}
</style>
