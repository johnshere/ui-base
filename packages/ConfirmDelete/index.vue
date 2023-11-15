<template>
  <el-button type="text" @click.stop>
    <u-popover v-model="visible" placement="left" width="220">
      <p>确认删除该条记录吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" :click="() => (visible = false)">
          取消
        </el-button>
        <el-button
          type="primary"
          size="mini"
          :loading="loading"
          @click="execute"
        >
          确定
        </el-button>
      </div>
      <el-link slot="reference" type="danger" :underline="false">
        删除
      </el-link>
    </u-popover>
  </el-button>
</template>
<script>
export default {
  name: "UConfirmDelete",
  props: {
    click: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
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
          this.visible = false;
        });
      }
    },
  },
};
</script>
