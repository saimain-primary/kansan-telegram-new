<script setup>
import { onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";
const telegram = window.Telegram.WebApp;
const route = useRoute();
onMounted(async () => {
  telegram.ready();
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>

