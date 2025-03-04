<template>
  <el-table
    ref="table"
    v-bind="$attrs"
    :size="size"
    :class="printClassName"
    v-on="listeners"
  >
    <template v-for="(slot, i) in Object.keys($slots)" :slot="slot">
      <div v-if="slot === 'empty'" :key="i" slot="empty">
        <div class="u-page-table__empty">
          <slot :name="slot" />
        </div>
      </div>
      <slot v-else :name="slot" />
    </template>
    <div v-if="!Object.keys($slots).includes('empty')" slot="empty">
      <div class="u-page-table__empty">暂无数据</div>
    </div>
  </el-table>
</template>
<script>
import listeners from '@src/utils/listeners.ts';
import { Table } from 'element-ui';
import 'element-ui/packages/theme-chalk/src/table.scss';

export default {
  name: "UTable",
  components: {
    [Table.name]: Table,
  },
  props: {
    size: {
      type: String,
      default() {
        if (process.env.VUE_VERSION === '3') {
          return 'default';
        }
        return "medium";
      },
    },
  },
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
  computed:{
    listeners(){
      return listeners.call(this)
    },
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
.el-table ::v-deep(),
.eu-table ::v-deep() {
  overflow: visible;
  .el-table__cell:last-child,
  .eu-table__cell:last-child {
    .el-button,
    .eu-button {
      margin-left: 0;
      margin-right: 12px;
      &.el-button--small,
      &.eu-button--small {
        font-size: 14px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .el-link,
    .eu-link {
      vertical-align: unset;
    }
  }
  thead th {
    &.el-table__cell,
    &.eu-table__cell {
      color: #606266;
      font-weight: bold;
      background: #f6f7fb;
    }
  }
  .el-table__header,
  .eu-table__header {
    th {
      font-weight: bold;
      background-color: #f5f7fa;
      color: #333;
    }
  }
  th {
    padding: 10px 0;
    &.center {
      text-align: center;
    }
  }
}
.adapter-screen {
  ::v-deep(.el-table__header),
  ::v-deep(.el-table__body) {
    width: 100% !important;
    col {
      width: 25% !important;
    }
    col[name="gutter"] {
      width: 0 !important;
    }
  }
}
</style>
