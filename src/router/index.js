import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/Home.vue";
import PostDetailView from "../pages/PostDetail.vue";
import BuyTicketView from "../pages/BuyTicket.vue";
import CheckoutView from "../pages/Checkout.vue";

const telegram = window.Telegram.WebApp;

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:id",
      name: "post_detail",
      component: PostDetailView,
    },
    {
      path: "/:id/buy-tickets",
      name: "buy_tickets",
      component: BuyTicketView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.fullPath === "/") {
    telegram.BackButton.hide();
    telegram.BackButton.isVisible = false;
  } else {
    telegram.BackButton.isVisible = true;
    telegram.BackButton.show();
    telegram.BackButton.onClick(() => {
      router.go(-1);
    });
  }
  next();
});

export default router;
