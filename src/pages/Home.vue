<script setup>
import { onMounted, ref, watch } from "vue";
import PostCard from "../components/PostCard.vue";
import axios from "axios";
import MasonryWall from "@yeger/vue-masonry-wall";
const telegram = window.Telegram.WebApp;
const data = ref(null);
const loading = ref(false);
const search = ref("");

const fetchData = async () => {
  loading.value = true;
  const response = await axios.get("https://fakestoreapi.com/products");
  data.value = response.data;
  loading.value = false;
};
onMounted(async () => {
  telegram.BackButton.hide();
  telegram.BackButton.isVisible = false;
  await fetchData();
});

watch(search, async (keyword) => {
  if (keyword === "") {
    await fetchData();
  } else {
    loading.value = true;
    data.value = data.value.filter((d) => {
      return d.title.indexOf(keyword) > -1;
    });
    loading.value = false;
  }
});
</script>

<template>
  <div class="px-4 pt-10">
    <div class="relative">
      <input
        v-model="search"
        type="text"
        placeholder="Search for products..."
        class="w-full bg-neutral-900 border-2 border-neutral-800 focus:outline-none p-4 rounded appearance-none text-sm"
      />
      <span
        class="absolute right-4 top-4"
        v-if="search !== ''"
        @click.prevent="search = ''"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-red-400"
        >
          <path
            fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
  </div>
  <div class="p-4">
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
    <div v-if="!loading && data">
      <MasonryWall :items="data" :ssr-columns="1" :column-width="260" :gap="16">
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
    </div>
    <div
      v-if="data && data.length < 1"
      class="flex flex-col items-center justify-center mt-20"
    >
      <img
        src="../assets/robotnotfound.gif"
        class="w-28 h-28 mx-auto mb-10"
        alt=""
      />
      <div class="text-center text-neutral-50/50 text-sm px-10">
        <p class="mb-2">Sorry! No result found</p>
        <p class="text-xs mb-5">
          We're sorry what you were looking for. Please try another way
        </p>
        <button
          @click.prevent="search = ''"
          class="text-red-500 text-xs flex items-center justify-center text-center mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 inline-block"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
          Clear Search
        </button>
      </div>
    </div>
  </div>
</template>