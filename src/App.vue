<script setup>
import { onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";
const telegram = window.Telegram.WebApp;
const route = useRoute();
onMounted(async () => {
  if (route.fullPath !== "/") {
    telegram.BackButton.isVisible = true;
    telegram.BackButton.onClick = () => {
      alert("clicked back");
    };
    telegram.BackButton.offClick = () => {
      alert("no clicked back");
    };
  }

  telegram.ready();
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>

