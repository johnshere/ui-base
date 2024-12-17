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
    async setContent() {
      const iframe = this.$refs.iframe;
      while (!iframe) await new Promise((r) => setTimeout(r, 200));
      iframe.contentDocument.write(this.value || "");
      this.setScale();
    },
    async loaded() {
      const iframe = this.$refs.iframe;

      iframe.contentDocument.body.style.margin = 0;
      iframe.contentDocument.body.style.marginTop = 6;
      const tRoot = top.document.documentElement;
      if (tRoot.getAttribute("flexableid") && tRoot.style.fontSize) {
        top.addEventListener("resize", this.setScale);
      } else {
        let height;
        while (!height) {
          height = iframe?.contentWindow?.document?.body?.scrollHeight;
          await new Promise((r) => setTimeout(r, 100));
        }
        iframe.style.height = height + "px";
      }
    },
    async setScale() {
      let iframe = this.$refs.iframe;
      let cwin = iframe?.contentWindow;
      let root = cwin?.document.documentElement;
      while (!iframe || !cwin?.document.body || !root) {
        await new Promise((r) => setTimeout(r, 100));
        iframe = this.$refs.iframe;
        cwin = iframe?.contentWindow;
        root = cwin?.document.documentElement;
      }
      const height = cwin?.document?.body?.scrollHeight;
      if (!height) return;

      const tRoot = top.document.documentElement;
      const tFontSize = parseFloat(tRoot.style.fontSize) || 0;
      if (tFontSize) {
        const scale = tFontSize * 0.01;
        root.style.transform = "scale(" + scale + ")";
        root.style.transformOrigin = "top left";
        root.style.width =
          parseFloat(getComputedStyle(iframe).width) / scale + "px";
        iframe.style.height = height * scale + "px";
      } else {
        iframe.style.height = height + "px";
      }
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
