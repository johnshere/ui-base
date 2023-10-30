<template>
  <el-button
    v-bind="$attrs"
    :loading="loading"
    v-on="$listeners"
    @click="execute"
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
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    execute() {
      if (this.click) {
        this.loading = true;
        const p = this.click();
        Promise.resolve(p).finally(() => {
          this.loading = false;
        });
      }
    },
  },
};
</script>
