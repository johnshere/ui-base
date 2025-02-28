<template>
    <div>
        <UTitle :title="title">
            <template #tip>
                <slot name="tip" />
            </template>
            <template #default>
                <slot name="operate" />
                <u-button
                    v-if="showExpand"
                    size="mini"
                    @click="handleExpand"
                >
                    {{ isExpand ? '收缩' : '展开' }}
                </u-button>
            </template>
        </UTitle>
        <el-collapse-transition>
            <div
                v-show="isExpand"
                style="padding:0 12px"
                class="u-card__body"
            >
                <slot />
            </div>
        </el-collapse-transition>
    </div>
</template>
<script>
import UTitle from '../title/index.vue'
export default {
  name: 'UTitleCard',
  components: {
    UTitle
  },
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
