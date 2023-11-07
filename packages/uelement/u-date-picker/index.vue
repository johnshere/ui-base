<template>
  <el-date-picker :style="style" v-bind="$attrs" v-on="$listeners">
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot">
      <slot :name="slot" />
    </template>
  </el-date-picker>
</template>
<script>
export default {
  name: "UDatePicker",
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
