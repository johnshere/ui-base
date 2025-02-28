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
    <template v-for="(_, name) in $slots" v-slot:[name]="data">
      <slot :name="name" v-bind="{ ...data }"></slot>
    </template>
  </el-radio-group>
</template>

<script>
import { Radio, RadioGroup } from "element-ui";
import Dictionary from "../dictionary/dictionary";

export default {
  name: "URadioGroup",
  components: {
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio
  },
  mixins: [Dictionary],
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  computed:{
    _listeners(){
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
