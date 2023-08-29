import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../App.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/home.vue')
      }
    ]
  }
]
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes
})
export default router
