<template>
  <el-cascader
    :append-to-body="false"
    v-bind="$attrs"
    ref="cascader"
    v-on="listeners"
  >
    <template v-for="slot in Object.keys($slots)" :slot="slot">
      <slot :name="slot" />
    </template>
  </el-cascader>
</template>
<script>
import { Cascader } from 'element-ui'

export default {
  name: "UCascader",
  components: {
    [Cascader.name]: Cascader,
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
  methods: {
    getCheckedNodes() {
      return this.$refs.cascader.getCheckedNodes();
    },
  },
};
</script>
<style lang="less" scoped>
.el-cascader {
  width: 100%;
}
::v-deep(.el-cascader-menu__wrap) {
  height: 204px;
}
</style>
