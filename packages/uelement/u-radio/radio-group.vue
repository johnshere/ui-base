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
import listeners from "@src/utils/listeners.ts";

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
      return listeners.call(this, {'input': this.input})
    },
  },
  methods: {
    input(v) {
      !this.readonly && this.$emit("input", v);
    },
  },
};
</script>
