<template>
  <el-cascader :style="style" v-bind="$attrs" v-on="$listeners">
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot">
      <slot :name="slot" />
    </template>
  </el-cascader>
</template>
<script>
export default {
  name: "UCascader",
  props: {
    style: {
      type: [Object, String],
      default: () => {
        return { width: '100%'};
      },
    },
  },
};
</script>
