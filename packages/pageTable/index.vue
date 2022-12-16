<template>
  <div class="u-page-table">
    <el-table
      ref="table"
      :data="data"
      style="width: 100%"
      :size="size"
      border
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
      <div slot="empty">
        <slot name="empty">
          <div class="u-page-table__empty">暂无数据</div>
        </slot>
      </div>
    </el-table>
    <div v-if="data.length > 0" class="u-page-table__pagination">
      <el-pagination
        ref="pagination"
        :page-sizes="pageSizes"
        :layout="layout"
        v-bind="$attrs"
        v-on="$listeners"
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
};
</script>

<style lang="less">
.u-page-table {
  .el-table {
    .el-table__header th {
      font-weight: bold;
      background-color: #f5f7fa;
      color: #333;
    }
    th {
      padding: 10px 0;
      &.center {
        text-align: center;
      }
    }
  }
  &__pagination {
    .el-pagination {
      margin: 24px 0;
    }
  }
  &__empty {
    background: url("./empty.png") no-repeat;
    width: 300px;
    height: 240px;
    margin: 0 auto;
    background-size: 100%;
    padding-top: 134px;
    margin-top: 56px;
  }
}
</style>
