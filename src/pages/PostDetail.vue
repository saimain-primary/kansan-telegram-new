<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";

const route = useRoute();
const data = ref(null);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  const response = await axios.get(
    "https://fakestoreapi.com/products/" + route.params.id
  );
  data.value = response.data;
  loading.value = false;
  console.log("🚀 ~ file: PostDetail.vue:11 ~ onMounted ~ response:", response);
});
</script>

<template>
  <div class="mb-5" v-if="loading">
    <div
      class="bg-gradient-to-r from-transparent -translate-x-full animate-[shimmer_2s_infinite] via-rose-100/10 to-transparent"
    ></div>
    <div
      class="isolate overflow-hidden shadow-black/5 before:border-t before:border-rose-100/10 space-y-5 rounded-md relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent"
    >
      <div class="h-44 w-100 mx-auto rounded mb-3 bg-rose-100/10"></div>
      <div class="space-y-3">
        <div class="h-5 w-5/5 rounded bg-rose-100/10"></div>
        <div class="h-5 w-5/5 rounded bg-rose-100/10"></div>
        <div class="h-3 w-5/5 rounded bg-rose-100/20"></div>
        <div class="h-3 w-5/5 rounded bg-rose-100/20"></div>
        <div class="h-3 w-5/5 rounded bg-rose-100/20"></div>
        <div class="h-3 w-5/5 rounded bg-rose-100/20"></div>
        <div class="h-3 w-2/5 rounded bg-rose-100/20"></div>
        <div class="h-14 w-5/5 rounded bg-rose-100/20"></div>
      </div>
    </div>
  </div>
  <div v-if="!loading && data">
    <img
      :src="data.image"
      alt=""
      class="object-fill h-56 w-100 mx-auto rounded mb-10"
    />
    <p class="font-medium mb-1 text-lg dark:text-white">{{ data.title }}</p>
    <p class="mb-3 text-base font-normal">
      {{ data.description }}
    </p>
    <p class="mb-5 text-sm">‌ဈေးနှုန်း - {{ data.price }} ကျပ်</p>

    <p class="p-2 border-2 mb-5 border-gray-400 border-dashed rounded-md">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse accusantium
      atque tempore ipsa amet tenetur facere vero recusandae odio nostrum,
      labore ut rerum consequuntur. Repellendus adipisci aperiam velit aut
      doloribus odit in numquam modi blanditiis facere cupiditate veniam ab
      neque deleniti, explicabo repellat odio et optio porro enim itaque. Quasi
      tempora pariatur minima quidem neque assumenda temporibus rerum deleniti
      necessitatibus, reprehenderit recusandae architecto dicta optio veniam at
      iste velit exercitationem magni officia animi? Explicabo iure fugit veniam
      laborum optio, enim est minima consequatur nesciunt fugiat molestiae rerum
      nulla animi aspernatur. Nihil, illo delectus incidunt commodi deleniti
      dignissimos fugiat numquam asperiores.
    </p>
    <router-link
      :to="`/${data.id}/buy-tickets`"
      class="bg-blue-600 w-full inline-block text-center py-4 rounded-md shadow text-sm hover:bg-blue-700 transition duration-200"
    >
      လက်မှတ်ဝယ်ယူမည်
    </router-link>
  </div>
</template>