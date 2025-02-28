<template>
  <el-select v-bind="$attrs" v-on="_listeners">
    <el-option v-for="(item, i) in list" :key="i" v-bind="{...item}" />
    <template v-for="(_, name) in $slots" v-slot:[name]="data">
      <slot :name="name" v-bind="{ ...data }"></slot>
    </template>
  </el-select>
</template>
<script>
import { Option, Select } from "element-ui";
import Dictionary from "../dictionary/dictionary"

export default {
  name: "USelect",
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
  },
  mixins: [Dictionary],
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    _listeners() {
      if (process.env.VUE_VERSION === '3') {
        const listeners = {}
        Object.keys(this.$attrs).forEach(key => key.startsWith('on')&&(listeners[key] = this.$attrs[key]))
        return {...listeners, 'input': this.input}
      } else {
        return { ...this.$listeners, 'input': this.input }
      }
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