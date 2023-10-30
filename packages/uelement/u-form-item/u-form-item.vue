<template>
  <el-form-item :label="_label" v-bind="$attrs" v-on="$listeners">
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data" />
    </template>
  </el-form-item>
</template>
<script>
export default {
  name: "UFormItem",
  props: {
    label: {
      type: String,
    },
    colon: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    _label() {
      if (!this.colon) return this.label;
      return this.label?.endsWith("：") ? this.label : this.label + "：";
    },
  },
};
</script>
