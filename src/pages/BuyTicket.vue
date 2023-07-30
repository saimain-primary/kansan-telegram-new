<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import axios from "axios";
import { routerKey, useRoute, useRouter } from "vue-router";
import { RouterLink } from "vue-router";
const telegram = window.Telegram.WebApp;
const route = useRoute();
const router = useRouter();
const perPage = 100;
const currentPage = ref(1);

const totalPages = computed(() => {
  const tPs = Math.ceil(1000 / perPage);
  const paginatedData = [];
  for (let i = 0; i < tPs; i++) {
    const startNum = i * perPage;
    const endNum = startNum + perPage - 1;
    const startText = startNum.toString().padStart(3, "0");
    const endText = endNum.toString().padStart(3, "0");
    const pageText = `${startText} - ${endText}`;
    paginatedData.push({ text: pageText, value: i + 1 });
  }
  return paginatedData;
});

const selectedNumbers = ref([]);

const handlerSelectNumber = (num) => {
  telegram.HapticFeedback.impactOccurred("light");

  if (selectedNumbers.value.includes(num)) {
    selectedNumbers.value = selectedNumbers.value.filter((n) => n !== num);
  } else {
    selectedNumbers.value.push(num);
  }
};

const currentPageNumbers = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return Array.from({ length: end - start }, (_, index) =>
    String(start + index).padStart(3, "0")
  );
});

function numberClass(number) {
  const isSelected = selectedNumbers.value.includes(number);
  return `w-8 h-8 text-sm rounded ${
    isSelected ? "bg-blue-800 text-white" : "border border-white text-white"
  }`;
}

function changePage(page) {
  currentPage.value = page;
}

const checkoutHandler = () => {
  router.push({
    path: "/checkout",
    query: { nums: selectedNumbers.value.join(",") },
  });
};

watch(selectedNumbers.value, async (val) => {
  telegram.MainButton.show();
  telegram.MainButton.text = "လက်မှတ်ဝယ်ယူမည်";
  telegram.MainButton.onClick(() => {
    alert("main btn clicked");
  });
  telegram.MainButton.offClick(() => {
    alert("main btn off ");
  });
});

onMounted(async () => {
  console.log(telegram);
  telegram.isClosingConfirmationEnabled = true;
});

onUnmounted(() => {
  telegram.MainButton.hide();
});
</script>

<template>
  <div>
    <div class="bg-gray-900 mb-3 p-4 rounded text-gray-100">
      <div class="mb-5 flex items-center">
        <h3 class="font-medium font-padauk tracking-wide text-gray-100 text-sm">
          Lucky နံပါတ်များ ရွေးချယ်ရန်
        </h3>
      </div>
      <div>
        <input
          id="name"
          placeholder="Lucky နံပါတ်ရှာမည်"
          type="number"
          max="999"
          min="000"
          class="w-full bg-gray-800 p-4 rounded appearance-none text-sm focus:outline-none focus:border-0"
        />
      </div>
      <div class="text-center grid grid-cols-4 gap-2 pt-4">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page.value)"
          class="text-xs py-1 font-padauk leading-5 border-blue-800 border hover:bg-blue-800 hover:text-white text-gray-100 rounded"
          :class="{ 'bg-blue-800 text-white': currentPage === page.value }"
        >
          {{ page.text }}
        </button>
      </div>
      <div class="grid grid-cols-10 gap-2 pt-3">
        <button
          v-for="number in currentPageNumbers"
          :key="number"
          :class="numberClass(number)"
          @click.prevent="handlerSelectNumber(number)"
        >
          {{ number }}
        </button>
      </div>
    </div>
    <div class="bg-gray-900 mb-3 p-4 rounded text-gray-100">
      <div class="mb-3 gap-1 flex items-center">
        <h3 class="font-medium font-padauk tracking-wide text-gray-100 text-sm">
          ရွေးချယ်ထားသော Lucky နံပါတ်များ
        </h3>
        <div class="px-2 py-1 rounded-full text-xs bg-gray-800 text-white">
          {{ selectedNumbers.length }}
        </div>
      </div>
      <div class="text-center pt-4 mb-3" v-if="selectedNumbers.length <= 0">
        <p class="text-xs text-gray-400 font-padauk">
          သင့် Lucky နံပါတ်များ ရွေးချယ်ပါ
        </p>
      </div>
      <div v-else class="mt-3 pt-4 mb-3">
        <div class="grid grid-cols-6 gap-2 mb-3">
          <div
            v-for="number in selectedNumbers"
            @click.prevent="handlerSelectNumber(number)"
            :key="number"
            class="text-center py-1 rounded bg-blue-800 border relative border-blue-800"
          >
            <span class="text-sm text-white">{{ number }}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-4 h-4 absolute top-[-5px] right-[-5px] text-red-400"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <button @click.prevent="checkoutHandler" class="p-4 w-full bg-red-500">
      Checkout
    </button>
  </div>
</template>