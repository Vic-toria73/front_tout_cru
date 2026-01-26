<script setup lang="ts">
import { logout } from '../services/authService'
import { Menu, PawPrint, SquareX } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'

defineOptions({
  name: 'AppNavbar',
})

const { isAuthenticated } = useAuth()

const isMenuOpen = ref(false)

const router = useRouter()

function onLogout() {
  logout()
  isMenuOpen.value = false
  router.push('/home')
}
</script>

<template>
  <div class="bg-primary p-4 flex justify-between items-center">
    <div class="text">ToutCru</div>

    <div class="flex gap-4">
      <router-link to="/home" class="text text-2xl">
        <PawPrint />
      </router-link>

      <button @click="isMenuOpen = !isMenuOpen" class="text text-2xl" aria-label="Menu">
        <Menu v-if="!isMenuOpen" />
        <SquareX v-else />
      </button>

      <Transition name="slide">
        <div v-if="isMenuOpen"
          class="fixed top-0 right-0 h-full w-64 bg-primary shadow-lg z-50 p-6 flex flex-col justify-center gap-4">
          <button @click="isMenuOpen = false" class="absolute top-4 right-4 text text-2xl hover:opacity-70 transition"
            aria-label="Fermer le menu">
            <SquareX />
          </button>

          <div v-if="isAuthenticated">
            <router-link class="flex items-center h-12 px-4 hover:bg-background-alt/100 rounded-xl transition"
              @click="isMenuOpen = false" to="/me">Mon compte</router-link>
            <router-link class="flex items-center h-12 px-4 hover:bg-background-alt/100 rounded-xl transition"
              @click="isMenuOpen = false" to="/mypets">Mes animaux</router-link>
            <router-link class="flex items-center h-12 px-4 hover:bg-background-alt/100 rounded-xl transition"
              @click="isMenuOpen = false" to="/calculator">Calculer</router-link>

            <button type="submit" @click="onLogout" class="h-12 px-4 hover:bg-[#F90404]/100 rounded-xl transition">
              Déconnexion
            </button>
          </div>

          <div v-else>
            <router-link class="flex items-center h-12 px-4 hover:bg-background-alt/100 rounded-xl transition"
              @click="isMenuOpen = false" to="/login">Connexion</router-link>
            <router-link class="flex items-center h-12 px-4 hover:bg-background-alt/100 rounded-xl transition"
              @click="isMenuOpen = false" to="/register" aria-label="S'inscrire">Inscription</router-link>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-from {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
