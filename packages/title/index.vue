<template>
  <div
    class="common-header"
    :style="{ background: bgColor }"
  >
    <div class="header-title">
      <span class="el-button--primary"></span>
      {{ title }}
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UTitle',
  props: {
    bgColor: {
      type: String,
      default: '#fff'
    },
    title: {
      type: String,
      default:    ''
    } 
   }
}
</script>

<style lang="scss" scoped>
.common-header {
  margin-bottom: 20px;
  padding: 20px 18px 12px 18px;
  border-bottom: 1px solid #e8e8e8;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-title {
    font-size: 16px;
    font-weight: bolder;
    color: #333;
    height: 18px;
    line-height: 18px;
    padding-left: 14px;
    position: relative;
    .el-button--primary {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      height: 18px;
      width: 4px;
      -webkit-print-color-adjust: exact;
    }
  }
}
</style>
