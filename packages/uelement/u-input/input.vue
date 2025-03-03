<template>
  <el-input v-bind="$attrs" v-on="_listeners">
    <template v-for="(_, name) in $slots" v-slot:[name]="data">
      <slot :name="name" v-bind="{ ...data }" />
    </template>
  </el-input>
</template>
<script>
import listeners from '@src/utils/listeners.ts';
import { Input } from 'element-ui';
import 'element-ui/packages/theme-chalk/src/input.scss';

export default {
  name: "UInput",
  components: {
    [Input.name]: Input
  },
  props: {
    trim: {
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
    input(value) {
      if (this.trim || this.$UBase['input.trim']) {
        value = value.replace(/^\s+|\s+$/gm,'');
      }
      this.$emit("input", value);
    }
  }
};
</script>
