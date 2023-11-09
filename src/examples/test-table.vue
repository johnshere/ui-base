<template>
  <page-table :data="tableData">
    <el-table-column
      min-width="60"
      type="selection"
      align="center"
    />
    <el-table-column
      min-width="150"
      prop="index"
      label="供应商名称"
      align="center"
    />
    <el-table-column
      min-width="150"
      prop="index"
      label="附件类型"
      align="center"
    />
    <el-table-column
      min-width="150"
      prop="index"
      label="报价单名称"
      align="center"
    />
    <el-table-column
      min-width="150"
      prop="index"
      label="操作"
      align="center"
    />
  </page-table>
</template>

<script>
import pageTable from "../../packages/pageTable";

export default {
  components: { pageTable },
  data() {
    return {
      tableData: [{}],
    }
  },
};
</script>
<style lang="less" scoped></style>
  