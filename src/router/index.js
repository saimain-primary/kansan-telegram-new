import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/Home.vue";
import PostDetailView from "../pages/PostDetail.vue";
import BuyTicketView from "../pages/BuyTicket.vue";

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
  ],
});

export default router;
