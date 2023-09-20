<template>
  <div
    class="common-header"
    :style="{ background: bgColor }"
  >
    <div class="header-title">
      <div>
        <span class="el-button--primary"></span>
        {{ title }}
      </div>
      <div class="tip">
        <slot name="tip"></slot>
      </div>
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

<style lang="less" scoped>
.common-header {
  margin-bottom: 20px;
  padding: 20px 12px 12px 12px;
  border-bottom: 1px solid #e8e8e8;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .header-title {
    font-size: 16px;
    font-weight: bolder;
    color: #333;
    height: 18px;
    line-height: 18px;
    padding-left: 14px;
    position: relative;
    display: flex;
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
  .tip{
    color: #ff1717;
    font-size: 14px;
    font-weight: normal;
  }
}
</style>
