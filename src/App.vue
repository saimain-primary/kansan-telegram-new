<script setup>
import { onMounted, ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const telegram = window.Telegram.WebApp;
const route = useRoute();
const themeColor = ref(telegram.colorScheme);

onMounted(async () => {
  // telegram.themeParams.bg_color = "#1F2937";
  // telegram.themeParams.text_color = "#f3f4f6";
  // telegram.themeParams.button_color = "#2463EB";
  // telegram.themeParams.button_text_color = "#f3f4f6";
  telegram.ready();

  themeColor.value = "dark";

  if (themeColor.value === "dark") {
    isDark.value = true;
  } else {
    isDark.value = false;
  }
});
</script>

<template>
  <div
    class="bg-white dark:bg-neutral-900 p-4 text-neutral-900 dark:text-white min-h-screen"
  >
    <RouterView />
  </div>
</template>

<style scoped>
</style>

