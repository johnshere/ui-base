<script>
import dialog from "element-ui/packages/dialog/index";
export default {
  extends: dialog,
};
</script>
<style lang="less" scoped>
.el-dialog__header {
  width: 100%;
  height: 34px;
  background: #f5f7fa;
  border: 1px solid #dad7e2;
  border-radius: 6px 6px 0px 0px;
  line-height: 32px;
  padding: 0;
  padding-left: 20px;
  box-sizing: border-box;
  .el-dialog__headerbtn {
    top: 10px;
    right: 16px;
  }
}
</style>
