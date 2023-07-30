<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
const telegram = window.Telegram.WebApp;
const route = useRoute();
const data = ref(null);

onMounted(() => {
  console.log(route.query.nums);
  const queryNums = route.query.nums;
  data.value = queryNums ? queryNums.split(",") : null;

  telegram.MainButton.show();
  telegram.MainButton.text = "ငွေပေး‌ချေမည်";
  telegram.MainButton.onClick(() => {
    alert("main btn clicked");
  });
  telegram.MainButton.offClick(() => {
    alert("main btn off ");
  });
});

onUnmounted(() => {
  telegram.MainButton.hide();
});
</script>

<template>
  <div>
    <p class="mb-3">Selected Number</p>

    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>
</template>