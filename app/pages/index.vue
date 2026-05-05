<script setup lang="ts">
import { ref, computed } from 'vue';

import jsonData from '../assets/data.json';
import Term from '~/components/Term.vue';

const data = ref(jsonData);

const inputText = ref("");
const strToSearch = ref("");

/**
 * Function to input string to search
 */
const search = () => {
    strToSearch.value = inputText.value;
};

/**
 * Function to filter data
 */
const filteredData = computed(() => {
    if (strToSearch.value === '') {
        return [];
    } else {
        return data.value.filter(value =>
            value.read.includes(strToSearch.value)
        );
    }
});
</script>

<template>
    <h1 style="text-align: center;">ルビリオ当て字Web</h1>
    <div style="text-align: center;">
        <input type="text" id="inputStr" v-model="inputText" placeholder="文字を入力してくださいな" @keyup.enter="search" />
        <button v-on:click="search">Submit</button>
    </div>
    <div v-for="value in filteredData" :key="value.read" class="mb-3" style="display: flex; justify-content: center;">
        <Term :char="value.char" :ruby="value.read" :cite="value.cite" />
    </div>
</template>
