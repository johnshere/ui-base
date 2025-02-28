<template>
  <el-form-item :label="_label" v-bind="$attrs" v-on="listeners">
    <template v-for="(_, name) in $slots" v-slot:[name]="data">
      <slot :name="name" v-bind="{ ...data }" />
    </template>
  </el-form-item>
</template>
<script>
import { FormItem } from 'element-ui';

export default {
  name: "UFormItem",
  components: {
    [FormItem.name]: FormItem
  },
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
      const hasColon = this.label?.endsWith("：") || this.label?.endsWith(":");
      return hasColon ? this.label : this.label + ":";
    },
    listeners(){
      if (process.env.VUE_VERSION === '3') {
        const listeners = {}
        Object.keys(this.$attrs).forEach(key => key.startsWith('on')&&(listeners[key] = this.$attrs[key]))
        return listeners
      } else {
        return { ...this.$listeners }
      }
    },
  },
};
</script>
