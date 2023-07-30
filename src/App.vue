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
  <router-view v-slot="{ Component, route }">
    <!-- Use any custom transition and  to `fade` -->
    <transition :name="route.meta.transition || 'fade'" appear>
      <div
        class="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white min-h-screen"
      >
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<style scoped>
</style>

