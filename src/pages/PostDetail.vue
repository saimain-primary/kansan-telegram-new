<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";

const route = useRoute();
const data = ref(null);
onMounted(async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/" + route.params.id
  );
  data.value = response.data;
  console.log("🚀 ~ file: PostDetail.vue:11 ~ onMounted ~ response:", response);
});
</script>

<template>
  <div v-if="data">
    <img
      :src="data.image"
      alt=""
      class="object-fill h-56 w-100 mx-auto rounded mb-10"
    />
    <p class="font-medium mb-1 text-lg">{{ data.title }}</p>
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
      :to="`/${id}/buy-tickets`"
      class="bg-blue-600 w-full inline-block text-center py-4 rounded-md shadow text-sm hover:bg-blue-700 transition duration-200"
    >
      လက်မှတ်ဝယ်ယူမည်
    </router-link>
  </div>
</template>