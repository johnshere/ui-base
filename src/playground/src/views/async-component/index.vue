<template>
    <div class="test--async-component">
        <AsyncComponent
            id="id1234"
            ac-name="Test"
            @change="change"
            @count="count"
        >
            content
        </AsyncComponent>
    </div>
</template>

<script lang="ts" setup>
import {AsyncComponent} from '@src/async-component';

const change = (str: string) => {
    console.log('change: ' + str);
}
const count = (num: number) => {
    console.log('count: ' + num);
}
</script>
