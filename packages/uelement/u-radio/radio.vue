<template>
    <el-radio v-bind="$attrs" v-on="_listeners">
        <slot />
    </el-radio>
</template>

<script>
import listeners from '@src/utils/listeners.ts';
import { Radio } from 'element-ui';
import 'element-ui/packages/theme-chalk/src/radio.scss';

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
