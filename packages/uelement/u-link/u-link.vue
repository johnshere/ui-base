<template>
  <el-link
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot">
      <slot :name="slot" />
    </template>
  </el-link>
</template>
<script>
export default {
  name: "ULink",
};
</script>
