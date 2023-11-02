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
<style lang="scss" scoped>
::v-deep .el-table__empty-block{
  height: 200px !important;
  background: url(../../../assets/index_images/no-data.png) no-repeat center;
  background-position: center 30px;
}
::v-deep .el-table__empty-text{
  padding-top: 70px;
  color: #ccc;
}
.adapter-screen {
  ::v-deep .el-table__header{
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
