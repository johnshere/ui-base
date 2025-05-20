<template>
    <el-select
        v-bind="{ ...$attrs }"
        :clearable="!readonly && clearable"
        v-on="_listeners"
    >
        <el-option
            v-for="(item, i) in list"
            :key="i"
            v-bind="{...item}"
        />
        <template v-for="(_, name) in $slots" #[name]>
            <slot :name="name" />
        </template>
    </el-select>
</template>
<script>
import { Option, Select } from "element-ui";
import 'element-ui/packages/theme-chalk/src/select.scss';
import 'element-ui/packages/theme-chalk/src/option.scss';
import Dictionary from "../dictionary/dictionary"
import listeners from "@src/utils/listeners.ts";

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
    clearable: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    _listeners() {
      return listeners.call(this, {'input': this.input})
    },
  },
  methods: {
    input(v) {
      if (!this.readonly) this.$emit("input", v);
    },
  },
};
</script>

<style lang="scss" scoped>
div.el-select,
div.eu-select {
  width: 100%;
}
</style>