<template>
  <el-radio-group
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-radio
      v-for="(item,i) in list"
      :key="i"
      v-bind="item"
    >
      {{item.text}}
    </el-radio>
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
  </el-radio-group>
</template>

<script>
import { Radio, RadioGroup } from "element-ui";
import Dictionary from  "../dictionary/dictionary" 

export default {
  name: "URadioGroup", 
  components:{
     Radio, RadioGroup
  }, 
  mixins: [Dictionary],
}
</script>
