<template>
    <div class="home-page">
        <h1>Vue Version: {{ IS_VUE2 ? '2' : '3' }}</h1>
        <button @click="show">dialog</button>
        <u-dialog :visible.sync="visible" title="test-title">
            test-content
            <template #title>
                111
            </template>
            <template #footer>
                <button @click="visible = false">ca222ncel</button>
                <button @click="visible = false">ok</button>
            </template>
        </u-dialog>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import {IS_VUE2} from '../../utils/runtime-env';
import { UDialog } from 'ui-base'

const visible = ref(false)
function show() {
    console.log(1)
    visible.value = true
    console.log(2)
}
</script>
