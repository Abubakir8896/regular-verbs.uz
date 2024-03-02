import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";
const routes = [
  {
    path: "",
    children: [
      {path: "", component: HomePage, name: 'Home' },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NOT_FOUND',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: "NOT_FOUND"
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
