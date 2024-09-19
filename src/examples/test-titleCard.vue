<template>
  <div>
    <titleCard title="12342134" showExpand>
      <template #tip>
        <div>125454</div>
      </template>
      <template #operate>
        <u-button>545454</u-button>
      </template>
      <div style="background-color: yellow" class="body">东京粉底覅覅发冬季防火</div>
    </titleCard>
  </div>
</template>

<script>
import titleCard from "../../packages/title-card";

export default {
  components: { titleCard },
};
</script>
<style lang="less" scoped>
.body {
  width: 20px;
}
</style>
