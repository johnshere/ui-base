const component = {
  name: 'UColPreset',
  render() {
    return <UCol xxl={6} xl={6} lg={8} md={12} sm={12}>{this.$slots.default}</UCol>
  },
  install(Vue) {
    Vue.component(component.name, component);
  }
}

export default component;
