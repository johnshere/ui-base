<template>
  <el-input v-bind="$attrs" v-on="_listeners">
    <template v-for="(_, name) in $slots" v-slot:[name]="data">
      <slot :name="name" v-bind="{ ...data }" />
    </template>
  </el-input>
</template>
<script>
import { Input } from 'element-ui';

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
      const { input } = this;
      return Object.assign({}, this.$listeners, { input });
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
