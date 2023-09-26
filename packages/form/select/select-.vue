<script>
import { Select, Option } from "element-ui";
import Dictionary from "ui-base/packages/form/dictionary/dictionary"

export default {
  name: "USelect",
  extends: Select,
  mixins : [Dictionary],
  methods: {
    renderOptions(list){
      this.$slots.default = list.map(d =><Option value={d.value} label={d.label} disabled={d.disabled}></Option>)
      // this.$slots.default = list.map(d => <Option {d}></Option>)
    }
  }
};
</script>

<style lang="less" scoped>
div.el-select {
  width: 100%;
}
</style>