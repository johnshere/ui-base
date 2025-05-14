// @ts-nocheck
import { h } from 'vue';
import { Col } from 'element-ui';
const component = {
  name: 'UColPreset',
  props: {
    xxl: {
      type: Number,
      default: 6,
    },
    xl: {
      type: Number,
      default: 6,
    },
    lg: {
      type: Number,
      default: 8,
    },
    md: {
      type: Number,
      default: 12,
    },
    sm: {
      type: Number,
      default: 12,
    },
  },
  render() {
    const { xxl, xl, lg, md, sm } = this;
    return h(Col, {
      xxl,
      xl,
      lg,
      md,
      sm,
      ...this.$attrs,
    }, this.$slots.default);
  },
  install(Vue) {
    Vue.component(component.name, component);
  },
};

export default component;
