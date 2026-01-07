import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '@/views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/',
      redirect: '/register',
    },
  ],
})

export default router
