<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
const telegram = window.Telegram.WebApp;
onMounted(async () => {
  telegram.ready();
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>

