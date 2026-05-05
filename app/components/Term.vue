<script setup lang="ts">
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
    <v-card class="mx-auto" min-width="344" max-width="100%" variant="outlined">
        <v-card-item>
            <v-card-title>{{ char }}</v-card-title>
            <v-card-subtitle>{{ ruby }}</v-card-subtitle>
        </v-card-item>

        <v-card-text style="text-align: right;">
            『{{ cite }}』
        </v-card-text>
    </v-card>
</template>
