<template>
    <form action="">
        <label for="google-search">חפש באתר ע"י גוגל </label>
        <input type="text" placeholder=" חפש .." id="google-search" v-model="search">

        <button @click.prevent="handleclick()" id="btn">חפש</button>
    </form>

</template>

<script setup>

import { ref } from 'vue'
const search = ref('')
const handleclick = (e) => {
    console.log(search.value)

    window.location.href =
        `https://www.google.com/search?q=site:https://pitron-halomot.org "${search.value}"`
}

</script>

<style></style>