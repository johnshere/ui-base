<template>
  <el-radio-group v-bind="$attrs" v-on="_listeners">
    <el-radio
      v-for="item in list"
      :key="item.value"
      :label="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </el-radio>
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
  </el-radio-group>
</template>

<script>
import Dictionary from "../dictionary/dictionary";

export default {
  name: "URadioGroup",
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
