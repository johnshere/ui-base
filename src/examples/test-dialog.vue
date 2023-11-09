<template>
  <div>
    <dialog-ca :visible="true" title="12342134">
      <div style="background-color: yellow">test</div>
    </dialog-ca>
  </div>
</template>

<script>
import dialogCa from "../../packages/uelement/u-dialog/dialog.vue";

export default {
  components: { dialogCa },
};
</script>
<style lang="less" scoped></style>
