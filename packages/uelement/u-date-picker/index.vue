<template>
  <el-date-picker v-bind="$attrs" v-on="listeners">
    <template v-for="slot in Object.keys($slots)" :slot="slot">
      <slot :name="slot" />
    </template>
  </el-date-picker>
</template>
<script>
import { DatePicker } from 'element-ui'

export default {
  name: "UDatePicker",
  components: {
    [DatePicker.name]: DatePicker
  },
  computed:{
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
<style lang="less" scoped>
.el-date-editor {
  width: 100%;
}
</style>
