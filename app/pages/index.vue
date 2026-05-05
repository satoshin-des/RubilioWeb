<script setup lang="ts">
import { ref, Text } from 'vue';

import jsonData from '../assets/data.json';

const data = ref(jsonData);

const inputText = ref("");
const strToSearch = ref("");

const search = () => {
    strToSearch.value = inputText.value;
};
</script>

<template>
    <h1>ルビリオ当て字Web</h1>
    <input type="text" id="inputStr" v-model="inputText" placeholder="文字を入力してくださいな" @keyup.enter="search" />
    <button v-on:click="search">検索</button>
    <ul>
        <li v-for="value in data" :key="value.read">
            {{ value.char }}（{{ value.read }}）
            {{ strToSearch }}
        </li>
    </ul>
</template>
