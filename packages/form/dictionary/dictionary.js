export default {
  props: {
    // 父组件传入子项数据
    data: {
      type: Array,
      default: () => ([])
    },
    codeKey: {
      type: [Number, String],
      default: ''
    }
  },
  watch: {
    data(list) {
      if (this.codeKey) return
      this.resolveData(list)
    }
  },
  mounted() {
    this.getCodeData()
  },
  methods: {
    resolveData(list) {
      if (typeof this.renderOptions == 'function') {
        return this.renderOptions(list)
      }
      console.log("no option handle for " + this.codeKey)
    },
    // 获取字典数据
    getCodeData() {
      let resolve = this.resolveData

      if (!this.codeKey || !this.data.length) {
        return resolve(this.data)
      }

      // 获取字典数据
      // let res = await xxxx
      let res = { success: true } // todo test
      if (res.success) {
        return resolve(res.data)
      }
    }
  }
}