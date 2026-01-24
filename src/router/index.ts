import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../views/Register.vue'
import LoginPage from '../views/Login.vue'
import HomePage from '../views/Home.vue'
import AccountPage from '../views/MyAccount.vue'
import PetsPage from '../views/MyPets.vue'
import CalculatorPage from '../views/Calculator.vue'
import AddMyPet from '../views/AddPet.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/me',
      name: 'myaccount',
      component: AccountPage,
    },
    {
      path: '/mypets',
      name: 'mypets',
      component: PetsPage,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorPage,
    },
    {
      path: '/addpet',
      name: 'addmypet',
      component: AddMyPet,
    },
  ],
})

export default router
