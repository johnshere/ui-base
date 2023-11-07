<!--
 * @Author: liujiang
 * @Date: 2022-12-05 12:03:40
 * @LastEditors: liujiang liujiang@youzhicai.com
 * @LastEditTime: 2023-04-20 15:16:33
 * @Description:
-->
<template>
  <div class="rich-text">
    <div class="output">
      <div v-html="content" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'URichView',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    content: {
      set(value) {
        this.$emit('input', value)
      },
      get() {
        return this.value || ''
      },
    },
  },
}
</script>

<style lang="less" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.rich-text {
  .output {
    width: 100%;
    margin: 0;
    overflow-y: auto;
    resize: vertical;
  }

  // 修复为默认样式
  color: #353535;

  ::v-deep {
    strong {
      font-weight: bold;
    }
    em {
      font-style: italic;
    }
  }
}
</style>
