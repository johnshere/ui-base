<template>
    <el-form-item
        :label="_label"
        v-bind="$attrs"
        v-on="listeners"
    >
        <template v-for="(_, name) in $slots" #[name]>
            <slot :name="name" />
        </template>
    </el-form-item>
</template>
<script>
import listeners from '@src/utils/listeners.ts';
import { FormItem } from 'element-ui';
import 'element-ui/packages/theme-chalk/src/form-item.scss';

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
      return listeners.call(this)
    },
  },
};
</script>
