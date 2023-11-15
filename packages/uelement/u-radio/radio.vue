<template>
  <el-radio v-bind="$attrs" v-on="_listeners">
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
  </el-radio>
</template>

<script>
export default {
  name: "URadio",
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
