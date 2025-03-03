<template>
    <el-dialog
        v-bind="$attrs"
        :draggable="_draggable"
        :close-on-click-modal="closeOnClickModal"
        :close-on-press-escape="closeOnPressEscape"
        :class="_clss"
        v-on="_listeners"
    >
        <template v-for="(_, name) in $slots" #[name]="data">
            <slot :name="name" v-bind="{ ...data }" />
        </template>
    </el-dialog>
</template>
<script>
import { Dialog } from "element-ui";
import 'element-ui/packages/theme-chalk/src/overlay.scss';
import 'element-ui/packages/theme-chalk/src/dialog.scss';
import DraggableMixin from "../../utils/draggable";
import listeners from "@src/utils/listeners.ts";

const component = {
  name: "UDialog",
  components: {
    [Dialog.name]: Dialog,
  },
  props: {
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    _listeners() {
      return listeners.call(this)
    },
    _draggable() {
      if (this.draggable !== undefined) {
        return this.draggable;
      }
      return true
    },
    _clss() {
      return {
        "u-dialog": true,
        "isVue3": process.env.VUE_VERSION === "3"
      }
    }
  },
  watch: {
    async visible(val) {
      if (!val) return;
      await this.$nextTick();
      this.init()
    },
    async modelValue(val) {
      if (!val) return;
      await this.$nextTick();
      this.init()
    },
  },
  methods: {
    init() {
      const doc = this.$options.propsData.destroyOnClose;
      const isDestroyOnClose = doc === "" || doc === true;
      if (process.env.VUE_VERSION === "2" && this.draggable) {
        if (isDestroyOnClose) {
          this.initDrag();
        } else if (!this.dragEl) {
          this.initDrag();
        }
      }
    },
    initDrag() {
      this.targetEl = this.$el.querySelector(".el-dialog");
      this.dragEl = this.$el.querySelector(".el-dialog__header");
      if (!this.dragEl || !this.targetEl) return;
      this.useDraggable(this.targetEl, this.dragEl);
    },
  },
};

if (process.env.VUE_VERSION === "2") {
  component.mixins = [DraggableMixin];
}

export default component
</script>
<style lang="less">
.u-dialog {
  text-align: left;
  .el-dialog__header,
  .eu-dialog__header {
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
  &.isVue3 {
    padding-top: 56px;
    .el-dialog__header,
    .eu-dialog__header {
      position: absolute;
      left: -1px;
      top: 0;
      right: -1px;
      width: unset;
    }
    .el-dialog__headerbtn,
    .eu-dialog__headerbtn {
      top: -3px;
      right: 0px;
    }
  }

  &__body {
    padding: 32px 36px 42px;
  }
}
</style>
