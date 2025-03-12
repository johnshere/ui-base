<template>
    <el-checkbox v-bind="$attrs" v-on="_listeners">
        <template v-for="(_, name) in $slots" v-slot:[name]="data">
            <slot :name="name" v-bind="{ ...data }" />
        </template>
    </el-checkbox>
</template>
<script>
import listeners from '@src/utils/listeners.ts';
import { Checkbox } from 'element-ui'
import 'element-ui/packages/theme-chalk/src/checkbox.scss';

export default {
    name: 'UCheckbox',
    components: {
        [Checkbox.name]: Checkbox 
    },
    computed: {
      _listeners() {
        return listeners.call(this)
      },
    },
}
</script>
