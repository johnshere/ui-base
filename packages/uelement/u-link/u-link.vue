<template>
  <el-link
    v-bind="$attrs"
    :disabled="loading"
    v-on="listeners"
    @click="execute"
  >
    <template v-for="slot in Object.keys($slots)" :slot="slot">
      <i v-show="loading" class="el-icon-loading" /><slot :name="slot" />
    </template>
  </el-link>
</template>
<script>
import { Link } from 'element-ui';

export default {
  name: "ULink",
  components: {
    [Link.name]: Link
  },
  props: {
    click: {
      type: Function,
      default: null,
    },
  },
  computed:{
    listeners(){
      if (process.env.VUE_VERSION === '3') {
        const listeners = {}
        Object.keys(this.$attrs).forEach(key => key.startsWith('on')&&(listeners[key] = this.$attrs[key]))
        return listeners
      } else {
        return { ...this.$listeners }
      }
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    execute() {
      if (this.click) {
        this.loading = true;
        const p = this.click();
        Promise.resolve(p).finally(() => {
          this.loading = false;
        });
      }
    },
  },
};
</script>
