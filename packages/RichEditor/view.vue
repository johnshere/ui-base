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
    async value() {
      this.setContent();
    },
  },
  mounted() {
    this.setContent();
  },
  beforeUnmount() {
    if (this.timer) clearTimeout(this.timer);
    top.removeEventListener("resize", this.resize);
  },
  methods: {
    async setContent() {
      clearTimeout(this._timer);
      const iframe = this.$refs.iframe;
      if (!iframe) {
        this._timer = setTimeout(() => this.setContent(), 200);
        return;
      }
      iframe.contentDocument.write(this.value || "");
      if (this.value) {
        iframe.contentDocument.body.style.margin = 0;
        iframe.contentDocument.body.style.marginTop = 6;
        this.setScale();
        const tRoot = top.document.documentElement;
        if (tRoot.getAttribute("flexableid") && tRoot.style.fontSize) {
          top.addEventListener("resize", this.setScale);
        }
      } else {
        const height = iframe?.contentWindow?.document?.body?.scrollHeight;
        iframe.style.height = height + "px";
      }
    },
    async setScale() {
      const iframe = this.$refs.iframe;
      const cwin = iframe?.contentWindow;
      const root = cwin?.document.documentElement;
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

<style lang="scss" scoped>
@import "../style/common.scss";
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

  .output {
    margin: 0;
    resize: vertical;
  }
}
</style>
