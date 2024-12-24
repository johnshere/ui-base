<template>
    <div class="u-page-table">
        <el-table
            ref="table"
            :data="data"
            style="width: 100%"
            :size="size"
            border
            v-bind="$attrs"
            v-on="tableListener"
        >
            <slot />
            <template #empty>
                <div>
                    <slot name="empty">
                        <div class="u-page-table__empty">暂无数据</div>
                    </slot>
                </div>
            </template>
        </el-table>
        <div v-if="data.length > 0" class="u-page-table__pagination">
            <el-pagination
                ref="pagination" 
                background
                :page-sizes="pageSizes"
                :layout="layout"
                v-bind="$attrs"
                v-on="listeners"
            />
        </div>
    </div>
</template>

<script>
export default {
  name: "UPageTable",
  props: {
    data: {
      default() {
        return [];
      },
      type: Array,
    },
    size: {
      default() {
        return "medium";
      },
      type: String,
    },
    pageSizes: {
      default() {
        return [15, 30, 45, 60];
      },
      type: Array,
    },
    layout: {
      default() {
        return "total, sizes, prev, pager, next, jumper";
      },
      type: String,
    },
  },
  computed:{
    listeners(){
      // eslint-disable-next-line vue/no-deprecated-dollar-listeners-api
      return Object.assign({},this.$listeners)
    },
    tableListener(){
      // table和pagination的current-change同名，并且没啥用
      const currentChange = this.listeners['current-row-change'] || function(){}
      return Object.assign({},this.listeners,{'current-change':currentChange})
    }
  }
};
</script>

<style lang="less">
.u-page-table {
  .el-table {
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
  &__pagination {
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    .el-pagination {
      float: right;
      margin: 24px 0;
    }
  }
}
</style>
