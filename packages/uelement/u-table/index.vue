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
::v-deep .el-table__empty-block {
  height: 200px !important;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAABYBAMAAACnjmCCAAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjdGQjE5OUYxNTVDMTFFRThDMDdFMkUzMjZGNDI1NzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjdGQjE5QTAxNTVDMTFFRThDMDdFMkUzMjZGNDI1NzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCN0ZCMTk5RDE1NUMxMUVFOEMwN0UyRTMyNkY0MjU3MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCN0ZCMTk5RTE1NUMxMUVFOEMwN0UyRTMyNkY0MjU3MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpSZiCUAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAALVBMVEVHcEzK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) no-repeat center;
  background-position: center 30px;
}
::v-deep .el-table__empty-text {
  padding-top: 70px;
  color: #ccc;
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
