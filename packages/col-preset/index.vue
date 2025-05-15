<template>
    <el-col v-bind="{ ...$attrs, ...preset }">
        <slot />
    </el-col>
</template>
<script>
import { Col } from 'element-ui';
import 'element-ui/packages/theme-chalk/src/col.scss';
export default {
  name: 'UColPreset',
  components: {
    [Col.name]: Col
  },
  inject: ['UForm'],
  computed: {
    preset() {
      const isView = this.UForm?.$attrs.isView
      const isview = this.UForm?.$attrs['is-view'];
      if (!!isView || isView === '' || !!isview || isview === '') {
        return { xxl:6, xl: 6, lg: 8, md: 12, sm: 12 }
      }
      return { xxl:8, xl: 8, lg: 8, md: 12, sm: 12 }
    }
  }
};
</script>
