<script setup>
import { onMounted, ref } from "vue";
import PostCard from "../components/PostCard.vue";
import axios from "axios";
import MasonryWall from "@yeger/vue-masonry-wall";
const telegram = window.Telegram.WebApp;
const data = ref(null);

onMounted(async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  data.value = response.data;
});
</script>

<template>
  {{ telegram.version }}
  <MasonryWall
    v-if="data"
    :items="data"
    :ssr-columns="1"
    :column-width="260"
    :gap="16"
  >
    <template #default="{ item }">
      <PostCard
        :id="item.id"
        :style="{ height: `${item}px` }"
        :title="item.title"
        :description="item.description"
        :price="item.price"
        :image="item.image"
      />
    </template>
  </MasonryWall>
</template>