import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./views/Home.vue";
import OrdersView from "./views/Orders.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/orders", component: OrdersView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
