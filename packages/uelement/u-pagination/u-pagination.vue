<template>
    <el-pagination v-bind="$attrs" class="u-pagination">
        <template v-for="(_, name) in $slots" v-slot:[name]="data">
            <slot :name="name" v-bind="{ ...data }" />
        </template>
    </el-pagination>
</template>
<script>
import { Pagination } from 'element-ui';
import 'element-ui/packages/theme-chalk/src/pagination.scss';

export default {
    name: 'UPagination',
    components: {
        [Pagination.name]: Pagination
    }
}
</script>
<style lang="scss" scoped>
.u-pagination {
    margin-top: 20px;
    justify-content: flex-end;
    padding-right: 20px;
}
</style>
