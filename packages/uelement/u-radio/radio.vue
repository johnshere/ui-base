<template>
  <el-radio v-bind="$attrs" v-on="_listeners">
    <slot />
  </el-radio>
</template>

<script>
import { Radio } from 'element-ui';

export default {
  name: "URadio",
  components: {
    [Radio.name]: Radio
  },
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
