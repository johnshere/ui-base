<template>
    <el-form
        ref="form"
        v-bind="$attrs"
        v-on="listeners"
    >
        <template v-for="key in Object.keys($slots)" #[key]="data">
            <slot :name="key" v-bind="{ ...data }" />
        </template>
    </el-form>
</template>
<script>
import listeners from '@src/utils/listeners.ts';
import { Form } from 'element-ui';
import 'element-ui/packages/theme-chalk/src/form.scss';

export default {
  name: "UForm",
  components: {
    [Form.name]: Form
  },
  provide() {
    return {
      UForm: this
    };
  },
  computed:{
    listeners(){
      return listeners.call(this)
    },
  },
  methods: {
    async scrollToError(scrollOption) {
      scrollOption = Object.assign(scrollOption || {}, {
        behavior: "smooth",
        block: "center",
      });
      await this.$nextTick();
      const isError = this.$el.querySelector(".is-error");
      if (isError) {
        if ((window._formErrorScrollExpaire ?? 0) > Date.now()) return;
        window._formErrorScrollExpaire = Date.now() + 1000;
      }
      isError?.scrollIntoView(scrollOption);
    },

    async validate(callback) {
      const self = this;
      if (callback) {
        const callback_ = function (flag) {
          callback.call(self, ...arguments);
          if (!flag) self.$nextTick(self.scrollToError);
        };
        this.$refs.form.validate(callback_);
      } else {
        try {
          return await this.$refs.form.validate();
        } catch (e) {
          this.$nextTick(this.scrollToError);
          throw e;
        }
      }
    },
    async validateField(props, callback) {
      const self = this;
      if (callback) {
        const callback_ = function (errorMessage) {
          callback.call(self, ...arguments);
          if (errorMessage) self.$nextTick(self.scrollToError);
        };
        this.$refs.form.validateField(props, callback_);
      } else {
        try {
          return await this.$refs.form.validateField(props);
        } catch (e) {
          this.$nextTick(this.scrollToError);
          throw e;
        }
      }
    },
    clearValidate(props) {
      this.$refs.form.clearValidate(props);
    },
    resetFields() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
form[isView="true"],
form[isView=""],
form[is-view="true"],
form[is-view=""] {
  :deep(.el-form-item),
  :deep(.eu-form-item) {
    margin-bottom: 0;
  }
}
</style>
