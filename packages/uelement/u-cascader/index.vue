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
import listeners from '@src/utils/listeners.ts';
import { Cascader } from 'element-ui'
import 'element-ui/packages/theme-chalk/src/cascader.scss';

export default {
  name: "UCascader",
  components: {
    [Cascader.name]: Cascader,
  },
  computed:{
    listeners(){
      return listeners.call(this)
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
.el-cascader,
.eu-cascader {
  width: 100%;
}
::v-deep(.el-cascader-menu__wrap),
::v-deep(.eu-cascader-menu__wrap) {
  height: 204px;
}
</style>
