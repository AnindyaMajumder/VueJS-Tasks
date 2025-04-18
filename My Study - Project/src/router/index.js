import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../components/Tasks.vue')
    },
    {
      path: '/units',
      name: 'units',
      component: () => import('../components/Units.vue')
    }
  ]
})

export default router
