<script>
import { Dialog } from "element-ui";
export default {
  name: "UDialog",
  extends: Dialog,
};
</script>
<style lang="less" scoped>
.el-dialog__header {
  width: 100%;
  height: 34px;
  background: #f5f7fa;
  border: 1px solid #dad7e2;
  border-radius: 2px 2px 0px 0px;
  line-height: 32px;
  padding: 0;
  padding-left: 20px;
  box-sizing: border-box;
  .el-dialog__title {
    font-size: 16px;
  }
  .el-dialog__headerbtn {
    top: 10px;
    right: 16px;
  }
}
</style>
