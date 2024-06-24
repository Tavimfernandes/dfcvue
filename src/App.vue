<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
</script>

<template>
    <div>
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<style scoped src="./styles.css"></style>