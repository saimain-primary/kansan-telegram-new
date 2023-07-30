<script setup>
import { onMounted, ref } from "vue";
import PostCard from "../components/PostCard.vue";
import axios from "axios";
import MasonryWall from "@yeger/vue-masonry-wall";
const telegram = window.Telegram.WebApp;
const data = ref(null);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  const response = await axios.get("https://fakestoreapi.com/products");
  data.value = response.data;
  loading.value = false;
});
</script>

<template>
  <div class="mb-5 text-xs font-mono text-center">
    <p class="mb-5">Telegram Web App API Version : {{ telegram.version }}</p>
  </div>

  <div v-if="loading">
    <MasonryWall
      :items="[50, 75, 75, 100, 50]"
      :ssr-columns="1"
      :column-width="260"
      :gap="16"
    >
      <div class="mb-5">
        <div
          class="bg-gradient-to-r from-transparent -translate-x-full animate-[shimmer_2s_infinite] via-rose-100/10 to-transparent"
        ></div>
        <div
          class="isolate overflow-hidden shadow-xl shadow-black/5 before:border-t before:border-rose-100/10 space-y-5 rounded-md bg-white/5 p-4 relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent"
        >
          <div class="h-44 w-100 mx-auto rounded mb-3 bg-rose-100/10"></div>
          <div class="space-y-3">
            <div class="h-3 w-4/5 rounded bg-rose-100/10"></div>
            <div class="h-3 w-5/5 rounded5 rounded bg-rose-100/20"></div>
            <div class="h-3 w-5/5 rounded bg-rose-100/20"></div>
            <div class="h-3 w-2/5 rounded bg-rose-100/20"></div>
            <div class="h-14 w-5/5 rounded bg-rose-100/20"></div>
          </div>
        </div>
      </div>
    </MasonryWall>
  </div>
  <MasonryWall
    v-if="!loading && data"
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