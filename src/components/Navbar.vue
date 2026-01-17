<template>
  <div class="bg-primary p-4 flex justify-between items-center">
    <div class="text">ToutCru</div>
    <div class="flex gap-4">
      <router-link to="/home" class="text text-2xl">
        <PawPrint />
      </router-link>
      <button @click="toggleMenu" class="text text-2xl">
        <Menu />
      </button>

      <Transition name="slide">
      <div v-if="isMenuOpen" class="fixed top-0 right-0 h-full w-64 bg-primary shadow-lg z-50 p-6 
         flex flex-col justify-center gap-4">
        <router-link class="flex items-center h-12 px-4 hover:bg-background-alt/100 rounded-xl transition"
         @click="isMenuOpen = false" to="/me">Mon compte</router-link>
        <router-link class="flex items-center h-12 px-4 hover:bg-background-alt/100 rounded-xl transition"
        @click="isMenuOpen = false" to="/mypets">Mes animaux</router-link>
        <router-link class="flex items-center h-12 px-4 hover:bg-background-alt/100 rounded-xl transition"
        @click="isMenuOpen = false" to="/calculator">Calculer</router-link>
        <button @click="onLogout" class="h-12 px-4 hover:bg-[#F90404]/100 rounded-xl transition">Déconnexion</button>
      </div>
      </Transition>

    </div>
  </div>
</template>

<script setup lang="ts">
import { logout } from '../services/authService';
import { Menu, PawPrint } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

defineOptions({
  name: 'AppNavbar',
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const router = useRouter();

function onLogout() {
  logout();
  isMenuOpen.value = false;
  router.push('/home');
}
</script>

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
