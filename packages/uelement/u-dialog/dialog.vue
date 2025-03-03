<script>
import { Dialog } from "element-ui";
import 'element-ui/packages/theme-chalk/src/dialog.scss';
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
  watch: {
    visible(val) {
      if (!val) return;
      const doc = this.$options.propsData.destroyOnClose;
      const isDestroyOnClose = doc === "" || doc === true;
      if (process.env.VUE_VERSION === "2") {
        if (isDestroyOnClose) {
          this.initDrag();
        } else if (!this.dragEl) {
          this.initDrag();
        }
      }
    },
  },
  methods: {
    initDrag() {
      this.targetEl = this.$el.querySelector(".el-dialog");
      this.dragEl = this.$el.querySelector(".el-dialog__header");
      if (!this.dragEl || !this.targetEl) return;
      this.useDraggable(this.targetEl, this.dragEl);
    },
  },
};
</script>
<style lang="less" scoped>
.el-dialog,
.eu-dialog {
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

    .el-dialog__title,
    .eu-dialog__title {
      font-size: 16px;
    }

    .el-dialog__headerbtn,
    .eu-dialog__headerbtn {
      top: 10px;
      right: 18px;
      .el-dialog__close,
      .eu-dialog__close {
        font-size: 18px;
      }
    }
  }

  &__body {
    padding: 32px 36px 42px;
  }
}
</style>
