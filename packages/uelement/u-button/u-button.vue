<template>
  <el-button
    v-bind="$attrs"
    :loading="loading || _loading"
    v-on="$listeners"
    @click="execute"
    class="u-button"
    onclick="return false"
  >
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot">
      <slot :name="slot" />
    </template>
  </el-button>
</template>
<script>
export default {
  name: "UButton",
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
      _loading: false,
    };
  },
  methods: {
    execute() {
      if (this.click) {
        this._loading = true;
        const p = this.click();
        Promise.resolve(p).finally(() => {
          this._loading = false;
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
