<template>
  <el-link
    v-bind="$attrs"
    :disabled="loading"
    v-on="$listeners"
    @click="execute"
  >
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot">
      <i v-show="loading" class="el-icon-loading" /><slot :name="slot" />
    </template>
  </el-link>
</template>
<script>
export default {
  name: "ULink",
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
