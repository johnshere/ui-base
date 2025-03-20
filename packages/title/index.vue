<!--
 * @Author: liujiang
 * @Date: 2024-02-21 11:23:41
 * @LastEditors: liujiang liujiang@youzhicai.com
 * @LastEditTime: 2025-02-28 15:47:32
 * @Description: 
-->
<template>
  <div class="common-header" :style="u_style">
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
  name: "UTitle",
  props: {
    bgColor: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    u_style() {
      const style = {};
      this.bgColor && (style["background-color"] = this.bgColor);
      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
.common-header {
  margin-bottom: 20px;
  padding: 20px 12px 14px 12px;
  border-bottom: 1px solid #e8e8e8;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #fff;

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
      background-color: var(--eu-color-primary, --el-color-primary);
      border-color: var(--eu-color-primary, --el-color-primary);
    }
  }
  .tip {
    color: #fe3434;
    font-size: 14px;
    font-weight: normal;
  }
}
</style>
