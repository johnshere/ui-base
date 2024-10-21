<!--
 * @Author: liujiang
 * @Date: 2022-12-05 12:03:40
 * @LastEditors: liujiang liujiang@youzhicai.com
 * @LastEditTime: 2023-04-20 15:16:33
 * @Description:
-->
<template>
  <div class="rich-text">
    <!-- <div class="output">
      <div v-html="content" />
    </div> -->
    <iframe
      ref="iframe"
      frameborder="0"
      class="output"
      width="100%"
      height="100%"
      scrolling="no"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: "URichView",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  watch: {
    async value(val) {
      this.setContent();
    },
  },
  mounted() {
    this.setContent();
  },
  methods: {
    setContent() {
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        const iframe = this.$refs.iframe;
        if (!iframe) return this.setContent();
        iframe.contentDocument.write(this.value || "");
        await new Promise((r) => setTimeout(r, 300));
        const height = iframe.contentWindow.document.body.scrollHeight;
        iframe.style.height = height + "px";
        iframe.contentDocument.body.style.margin = 0;
        iframe.contentDocument.body.style.marginTop = 6;
      }, 200);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../style/common.less";
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.rich-text {
  width: 100%;
  height: 100%;
  color: #353535;
  position: relative;
  overflow: auto;
  .scrollBar();

  .output {
    margin: 0;
    resize: vertical;
  }
}
</style>
