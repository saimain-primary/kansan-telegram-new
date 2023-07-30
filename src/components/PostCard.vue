<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  id: String | Number,
  description: String,
  title: String,
  image: String,
  price: String | Number,
});
</script>

<template>
  <div class="rounded-md shadow bg-white dark:bg-neutral-800 p-4 h-100">
    <span class="bg-fuchsia-600 text-white p-1 rounded-md font-medium text-xs absolute">
      (၆) ကြိမ်မြောက်
    </span>
    <img
      :src="image"
      alt=""
      class="object-fill  h-44 w-100 mx-auto rounded mb-3"
    />
    <p class="font-medium mb-1 text-base dark:text-white">{{ title }}</p>
    <p class="mb-3 text-sm font-normal dark:text-white">
      {{ description }}
    </p>
    <p class="mb-5 text-xs dark:text-white">‌ဈေးနှုန်း - {{ price }} ကျပ်</p>
    <router-link
      :to="`/${id}`"
      class="bg-blue-600 text-white w-full inline-block text-center py-4 rounded-md shadow text-sm hover:bg-blue-700 transition duration-200"
    >
      အသေးစိတ်ကြည့်မည်
    </router-link>
  </div>
</template>