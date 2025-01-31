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
      name: 'landing',
      component: () => import('../components/landing/LandingPage.vue'),
    },

  ]
}
]

});

export default router
