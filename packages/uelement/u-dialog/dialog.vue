<script>
import { Dialog } from "element-ui";
import DraggableMixin from "../../utils/draggable";

export default {
  name: "UDialog",
  extends: Dialog,
  mixins: [DraggableMixin],
  props: {
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    const targetEl = this.$el.querySelector(".el-dialog");
    const dragEl = this.$el.querySelector(".el-dialog__header");
    if (!dragEl || !targetEl) return;
    this.useDraggable(targetEl, dragEl);
  },
};
</script>
<style lang="less" scoped>
.el-dialog {
  text-align: left;
  &__header {
    width: 100%;
    height: 38px;
    background: #f5f7fa;
    border: 1px solid #dad7e2;
    border-radius: 2px 2px 0px 0px;
    line-height: 36px;
    padding: 0;
    padding-left: 18px;
    box-sizing: border-box;

    .el-dialog__title {
      font-size: 16px;
    }

    .el-dialog__headerbtn {
      top: 10px;
      right: 18px;
      .el-dialog__close {
        font-size: 18px;
      }
    }
  }

  &__body {
    padding: 32px 36px 42px;
  }
}
</style>
