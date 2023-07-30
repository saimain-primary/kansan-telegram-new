<script setup>
const props = defineProps({
  description: String,
  title: String,
  image: String,
  price: String | Number,
});
</script>

<template>
  <div class="rounded-md shadow bg-gray-900 p-4 h-100">
    <span class="bg-fuchsia-600 p-1 rounded-md font-medium text-xs absolute">
      (၆) ကြိမ်မြောက်
    </span>
    <img
      :src="image"
      alt=""
      class="object-fill h-44 w-100 mx-auto rounded mb-3"
    />
    <p class="font-medium mb-1 text-base">{{ title }}</p>
    <p class="mb-3 text-sm font-normal">
      {{ description }}
    </p>
    <p class="mb-5 text-xs">‌ဈေးနှုန်း - {{ price }} ကျပ်</p>
    <button
      class="bg-blue-600 w-full py-4 rounded-md shadow text-sm hover:bg-blue-700 transition duration-200"
    >
      အသေးစိတ်ကြည့်မည်
    </button>
  </div>
</template>