<template>
  <el-dialog
    :visible.sync="visible"
    append-to-body
    title="用户登录"
    class="login_window"
    @close="close"
  >
    <iframe :src="loginWindow" id="login_iframe"></iframe>
  </el-dialog>
</template>

<script>
import { Dialog } from 'element-ui'
import 'element-ui/packages/theme-chalk/src/dialog.scss';

export default {
  components: {
    [Dialog.name]: Dialog
  },
  props: {
    loginVisible: {
      default: false,
      type: Boolean,
    },
    loginWindow: {
      type: String,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  watch: {
    loginVisible(val, oldVal) {
      this.visible = val;
    },
  },
  methods: {
    close() {
      this.$emit("closeLoginWin");
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.login_window) {
  .el-dialog,
  .eu-dialog {
    width: 800px;
    height: 582px;
    .el-dialog__header,
    .eu-dialog__header {
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

  .el-dialog__body,
  .eu-dialog__body {
    padding: 0;
  }
}
</style>