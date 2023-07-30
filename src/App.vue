<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
const telegram = window.Telegram.WebApp;
onMounted(async () => {
  console.log(telegram.initData);
  console.log(telegram.version);
  console.log(telegram.BackButton);
  telegram.BackButton.isVisible  = true;
  telegram.ready();
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>

