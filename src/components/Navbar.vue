<template>
  <div class="bg-primary p-4 flex justify-between items-center">
    <div class="text">ToutCru</div>
    <div class="flex gap-4">
      <button class="text text-2xl">
        <PawPrint />
      </button>
      <button @click="toggleMenu" class="text text-2xl">
        <Menu />
      </button>
        <div v-if="isMenuOpen" class="">
          <router-link to="/me">Mon compte</router-link>
          <router-link to="/mypets">Mes animaux</router-link>
          <router-link to="/calculator">Calculer</router-link>
          <button @click="onLogout">Déconnexion</button>
        </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu, PawPrint } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'AppNavbar',
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const router = useRouter();

function onLogout() {

}
</script>
