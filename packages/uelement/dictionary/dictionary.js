export default {
  props: {
    // 父组件传入子项数据
    data: {
      type: Array,
      default: () => ([])
    },
    dicType: {
      type: [Number, String, Symbol],
      default: ''
    },
    fieldNames: {
      type: Object,
      default: () => null
    },
  },
  data: () => ({ list: [] }),
  watch: {
    data(list) {
      if (this.dicType) return
      this.resolveData(list)
    }
  },
  mounted() {
    this.getCodeData()
  },
  methods: {
    resolveData(list) {
      const fieldNames = this.fieldNames || this.$UBase.dictionary?.fieldNames
      const { value = 'value', label = 'label', disabled = 'disabled' } = fieldNames || {}
      this.list = list?.map(item => ({ value: item[value], label: item[label], disabled: item[disabled] })) || []
    },
    // 获取字典数据
    getCodeData() {
      let resolve = this.resolveData

      if (!this.dicType && !this.data?.length) {
        return resolve(this.data)
      }

      // 获取字典数据
      if (typeof this.$UBase.dictionary?.handle == 'function') {
        this.$UBase.dictionary?.handle?.(this.dicType).then(data => resolve(data))
      }
    }
  }
}