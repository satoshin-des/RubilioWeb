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
        required: true
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
            <span v-if="cite.includes('http')">
                『<a :href="cite" target="_blank" rel="noopener noreferrer">{{ cite }}</a>』
            </span>
            <span v-else>
                『<a :href="'https://ja.wikipedia.org/wiki/' + cite" target="_blank" rel="noopener noreferrer">
                    {{ cite }}
                </a>』
            </span>
        </v-card-text>
    </v-card>
</template>
