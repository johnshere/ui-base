<template>
  <el-select v-bind="$attrs" v-on="$listeners">
    <el-option v-for="(item, i) in list" :key="i" v-bind="item" />
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
  </el-select>
</template>
<script>
import Dictionary from "../dictionary/dictionary"

export default {
  name: "USelect",
  mixins: [Dictionary],
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    _listeners() {
      const { input } = this;
      return Object.assign({}, this.$listeners, { input });
    },
  },
  methods: {
    input(v) {
      !this.readonly && this.$emit("input", v);
    },
  },
};
</script>

<style lang="less" scoped>
div.el-select {
  width: 100%;
}
</style>