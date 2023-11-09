<template>
  <el-table
    ref="table"
    size="medium"
    v-bind="$attrs"
    :class="printClassName"
    v-on="$listeners"
  >
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot">
      <slot :name="slot" />
    </template>
    <div slot="empty">
      <slot name="empty">
        <div class="u-page-table__empty">暂无数据</div>
      </slot>
    </div>
  </el-table>
</template>
<script>
export default {
  name: 'UTable',
  data() {
    const isAdapter = location.href.includes('isPrint=1') || location.href.includes('isPdf=1')
    return {
      printClassName: isAdapter ? 'adapter-screen' : ''
    };
  },
  methods: {
    toggleRowSelection() {
      this.$refs.table.toggleRowSelection(...arguments)
    }
  },
};
</script>
<style lang="less" scoped>
::v-deep {
  .el-table__cell:last-child .el-button {
    margin-left: 0;
    margin-right: 12px;
    &:last-child {
      margin-right: 0;
    }
  }
  thead th.el-table__cell {
    color: #606266;
    font-weight: bold;
    background: #f6f7fb;
  }
}
.adapter-screen {
  ::v-deep .el-table__header {
    width: 100% !important;
  }
  ::v-deep .el-table__header col{
    width: 25% !important;
  }
  ::v-deep .el-table__header col[name="gutter"]{
    width: 0 !important;
  }
  ::v-deep .el-table__body{
    width: 100% !important;
  }
  ::v-deep .el-table__body col{
    width: 25% !important;
  }
  ::v-deep .el-table__body col[name="gutter"]{
    width: 0 !important;
  }
}

</style>
