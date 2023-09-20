<template>
  <Select v-bind="$attrs" v-on="$listeners">
    <Option v-for="(item, i) in list" :key="i" v-bind="item"></Option>
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
  </Select>
</template>
<script>
import { Select, Option } from "element-ui";
import Dictionary from "../dictionary/dictionary"

export default {
  name: "USelect",
  components: {
    Select, Option
  },
  mixins: [Dictionary],
};
</script>

<style lang="less" scoped>
div.el-select {
  width: 100%;
}
</style>