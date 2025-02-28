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
