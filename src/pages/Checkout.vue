<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const telegram = window.Telegram.WebApp;
const route = useRoute();
const router = useRouter();
const data = ref(null);
const productId = ref(null);

const handlePayment = () => {};

onMounted(() => {
  console.log(route.query.nums);
  const queryNums = route.query.nums;
  const pId = route.query.product;

  data.value = queryNums ? queryNums.split(",") : null;
  productId.value = pId;

  telegram.BackButton.isVisible = true;
  telegram.BackButton.show();
  telegram.BackButton.onClick(() => {
    router.push({ path: `/${pId}/buy-tickets` });
  });

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
    <div class="bg-neutral-800 mb-5 p-4 text-gray-100 py-10">
      <img
        src="../assets/robotone.gif"
        class="w-28 h-28 mx-auto mb-10"
        alt=""
      />
      <div class="mb-5">
        <h3 class="font-medium tracking-wide text-center text-gray-100 text-lg">
          သင့် Lucky နံပါတ်များ
        </h3>
      </div>
      <div class="grid grid-cols-5 gap-3 items-start justify-center">
        <button
          v-for="item in data"
          :key="item"
          class="px-4 py-2 w-full text-center bg-neutral-900 rounded-md"
        >
          {{ item }}
        </button>
      </div>
    </div>
    <div class="bg-neutral-800 mb-5 text-gray-100 py-8 px-4">
      <div class="mb-5">
        <div class="flex items-center justify-between mb-5 text-sm">
          <p>မဲ အရေအတွက်</p>
          <p>{{ data?.length }} စောင်</p>
        </div>
        <div class="flex items-center justify-between mb-5 text-sm">
          <p>မဲ တစ်စောင် ကျသင့်ငွေ</p>
          <p>၁၀၀၀၀ ကျပ်</p>
        </div>
        <div class="flex items-center justify-between text-sm">
          <p>စုစုပေါင်း ကျသင့်ငွေ</p>
          <p>၁၀၀,၀၀၀ ကျပ်</p>
        </div>
      </div>
      <textarea
        name=""
        placeholder="Write some comment"
        class="w-full bg-neutral-900 rounded p-4 mb-5 appearance-none text-sm focus:outline-none focus:border-0"
        id=""
        cols="30"
        rows="5"
      ></textarea>
      <button
        @click="handlePayment"
        class="p-4 bg-red-500 w-full rounded shadow"
      >
        Payment
      </button>
    </div>
  </div>
</template>
