<template>
  <el-dialog
    :visible.sync="loginVisible"
    append-to-body
    title="用户登录"
    class="login_window"
    @close="close"
  >
    <iframe :src="loginWindow" id="login_iframe"></iframe>
  </el-dialog>
</template>

<script>
export default {
  props: {
    loginVisible: {
      default: false,
      type: Boolean,
    },
    loginWindow: {
      type: String,
    },
  },
  methods: {
    close() {
      this.$emit("closeLoginWin");
    },
  },
};
</script>

<style lang="less" scoped>
.login_window {
  ::v-deep .el-dialog {
    width: 800px;
    height: 582px;
    .el-dialog__header {
      border-bottom: 1px solid #eee;
      font-size: 14px;
      color: #333;
      overflow: hidden;
      background-color: #f8f8f8;
    }
    iframe {
      width: 100%;
      height: 539px;
    }
  }

  ::v-deep .el-dialog__body {
    padding: 0;
  }
}
</style>