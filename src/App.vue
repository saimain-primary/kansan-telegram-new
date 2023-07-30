<script setup>
import { onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";
const telegram = window.Telegram.WebApp;
const route = useRoute();
onMounted(async () => {
  telegram.themeParams.bg_color = "#1F2937";
  telegram.themeParams.text_color = "#f3f4f6";
  telegram.themeParams.button_color = "#2463EB"
  telegram.themeParams.button_text_color = "#f3f4f6";
  telegram.ready();
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>

