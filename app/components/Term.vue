<script setup lang="ts">
import { S } from 'vue-router/dist/options-C8M2qFcl.cjs';

defineProps({
    char: {
        type: String,
        required: true
    },
    ruby: {
        type: String,
        required: true
    },
    cite: {
        type: String,
        required: false
    }
});
</script>

<template>
    <p style="font-size: 0.8em;">{{ ruby }}</p>
    <p style="font-size: 2.0em;">{{ char }}</p>
    <p>{{ cite }}</p>
</template>
