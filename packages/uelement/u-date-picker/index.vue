<template>
  <el-date-picker v-bind="$attrs" v-on="listeners">
    <template v-for="slot in Object.keys($slots)" :slot="slot">
      <slot :name="slot" />
    </template>
  </el-date-picker>
</template>
<script>
import listeners from '@src/utils/listeners.ts';
import { DatePicker } from 'element-ui'

export default {
  name: "UDatePicker",
  components: {
    [DatePicker.name]: DatePicker
  },
  computed:{
    listeners(){
      return listeners.call(this)
    },
  },
};
</script>
<style lang="less" scoped>
.el-date-editor {
  width: 100%;
}
</style>
