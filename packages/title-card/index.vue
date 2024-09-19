<template>
  <div>
    <UTitle :title="title">
      <template #tip>
        <slot name="tip"></slot>
      </template>
      <template #default>
        <slot name="operate"></slot>
        <u-button @click="handleExpand" v-if="showExpand" size="mini">{{isExpand ? '收缩' : '展开'}}</u-button>
      </template>
    </UTitle>
    <el-collapse-transition>
      <div style="padding:0 12px" class="u-card__body" v-show="isExpand">
        <slot></slot>
      </div>
    </el-collapse-transition>
  </div>
</template>
<script>
  import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition';
export default {
  name: 'UTitleCard',
  props: {
    title: {
      required: true,
      type: String
    },
    showExpand: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isExpand: true,
    }
  },
  methods: {
    handleExpand() {
      this.isExpand = !this.isExpand
    }
  }
}
</script>
