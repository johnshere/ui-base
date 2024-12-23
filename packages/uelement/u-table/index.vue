<template>
  <el-table
    ref="table"
    size="medium"
    v-bind="$attrs"
    :class="printClassName"
    v-on="$listeners"
  >
    <template v-for="(slot, i) in Object.keys($scopedSlots)" :slot="slot">
      <div v-if="slot === 'empty'" :key="i" slot="empty">
        <div class="u-page-table__empty">
          <slot :name="slot" />
        </div>
      </div>
      <slot v-else :name="slot" />
    </template>
    <div v-if="!Object.keys($scopedSlots).includes('empty')" slot="empty">
      <div class="u-page-table__empty">暂无数据</div>
    </div>
  </el-table>
</template>
<script>
export default {
  name: "UTable",
  data() {
    const isAdapter =
      location.href.includes("isPrint=1") || location.href.includes("isPdf=1");
    return {
      printClassName: {
        "adapter-screen": isAdapter,
        "u-table": true
      }
    };
  },
  created() {
    "clearSelection,toggleRowSelection,toggleAllSelection,toggleRowExpansion,setCurrentRow,clearSort,clearFilter,doLayout,sort"
      .split(",")
      .forEach((fn) => {
        this[fn] = (...args) => this.$refs.table[fn](...args);
      });
  }
};
</script>
<style lang="scss" scoped>
.el-table ::v-deep {
  overflow: visible;
  .el-table__cell:last-child {
    .el-button {
      margin-left: 0;
      margin-right: 12px;
      &.el-button--small {
        font-size: 14px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .el-link {
      vertical-align: unset;
    }
  }
  thead th.el-table__cell {
    color: #606266;
    font-weight: bold;
    background: #f6f7fb;
  }
  .el-table__header th {
    font-weight: bold;
    background-color: #f5f7fa;
    color: #333;
  }
  // td {
  //   padding: 5px 0;
  // }
  th {
    padding: 10px 0;
    &.center {
      text-align: center;
    }
  }
}
.adapter-screen {
  ::v-deep .el-table__header {
    width: 100% !important;
  }
  ::v-deep .el-table__header col {
    width: 25% !important;
  }
  ::v-deep .el-table__header col[name="gutter"] {
    width: 0 !important;
  }
  ::v-deep .el-table__body {
    width: 100% !important;
  }
  ::v-deep .el-table__body col {
    width: 25% !important;
  }
  ::v-deep .el-table__body col[name="gutter"] {
    width: 0 !important;
  }
}
</style>
