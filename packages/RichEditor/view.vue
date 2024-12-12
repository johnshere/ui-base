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
      @load="loaded"
    />
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
  beforeDestroy() {
    if (this.timer) clearTimeout(this.timer);
    top.removeEventListener("resize", this.resize);
  },
  methods: {
    setContent() {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        const iframe = this.$refs.iframe;
        if (!iframe) return this.setContent();
        iframe.contentDocument.write(this.value || "");
      }, 200);
    },
    async loaded() {
      const iframe = this.$refs.iframe;

      iframe.contentDocument.body.style.margin = 0;
      iframe.contentDocument.body.style.marginTop = 6;
      const tRoot = top.document.documentElement;
      if (tRoot.getAttribute("flexableid") && tRoot.style.fontSize) {
        top.addEventListener("resize", this.setScale);
        this.setScale();
      } else {
        await new Promise((r) => setTimeout(r, 400));
        const height = iframe.contentWindow.document.body.scrollHeight;
        iframe.style.height = height + "px";
      }
    },
    async setScale() {
      clearTimeout(this.timer2);
      const iframe = this.$refs.iframe;
      const cwin = iframe.contentWindow;
      if (!cwin.document.body || !cwin.document.documentElement) {
        this.timer2 = setTimeout(this.setScale, 200);
        return;
      }
      const height = cwin.document.body.scrollHeight;
      const root = cwin.document.documentElement;
      const tRoot = top.document.documentElement;
      const tFontSize = parseFloat(tRoot.style.fontSize) || 0;
      const scale = tFontSize * 0.01;
      root.style.transform = "scale(" + scale + ")";
      root.style.transformOrigin = "top left";
      root.style.width =
        parseFloat(getComputedStyle(iframe).width) / scale + "px";
      iframe.style.height = height * scale + "px";
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
