import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from "../layout/Layout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',

      component: AppLayout,
      children: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/home/Home.vue'),
    },

  ]
}
]

});

export default router
