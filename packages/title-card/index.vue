<template>
  <div>
    <UTitle :title="title">
      <template #tip>
        <slot name="tip"></slot>
      </template>
      <template #default>
        <slot name="operate"></slot>
      </template>
    </UTitle>
    <div style="padding:0 12px">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UTitleCard',
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>
