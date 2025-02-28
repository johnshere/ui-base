<template>
  <el-button
    v-bind="$attrs"
    :loading="loading || b_loading"
    v-on="listeners"
    @click="execute"
    class="u-button"
    onclick="return false"
  >
    <template v-for="slot in Object.keys($slots)" :slot="slot">
      <slot :name="slot" />
    </template>
  </el-button>
</template>
<script>
import { Button } from 'element-ui'

export default {
  name: "UButton",
  components: {
    [Button.name]: Button,
  },
  props: {
    click: {
      type: Function,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // eslint-disable-next-line vue/no-reserved-keys
      b_loading: false,
    };
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
    execute() {
      if (this.click) {
        this.b_loading = true;
        const p = this.click();
        Promise.resolve(p).finally(() => {
          this.b_loading = false;
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.u-button.el-button--primary.is-plain:not(:hover):not(:focus) {
  background: none;
}
.el-button + .el-button {
  margin-left: 12px;
}
</style>
