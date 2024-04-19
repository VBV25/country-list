import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
      {
          path: '/',
          name: 'countries-list',
          component: () => import('@/pages/ListPage.vue'),
      },
      {
          path: '/country-information',
          name: 'country-information',
          component: () => import('@/pages/InfoPage.vue'),
      },
  ]
})

export default router 
