// import { Col } from "element";
const component = {
  name: 'UColPreset',
  render() {
    // return <Col xxl={6} xl={6} lg={8} md={12} sm={12}>{this.$slots.default}</Col>
    return ''
  },
  install(Vue) {
    Vue.component(component.name, component);
  }
}

export default component;
