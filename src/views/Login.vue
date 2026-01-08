<template>
<div class="success-message" v-if="message">
    <div class="success-icon">
      <UserCheck class="w-5 h-5" />
    </div>
    {{ message }}
  </div>
 <div class="min-h-52 bg-background flex flex-col relative">

    <div class="absolute left-1/2 -translate-x-1/2 top-[calc(100%-40px)] z-10">
      <div class="bg-background-alt w-20 h-20 rounded-full flex items-center justify-center">
        <CircleUser class="w-16 h-16 text-primary" />
      </div>
    </div>
  </div>
  
  <main class="flex-1 bg-background-alt flex items-center justify-center p-4 rounded-t-3xl pt-16">
    <div class="w-full max-w-md">
      <div class="rounded-3xl overflow-hidden">
        <div class="pb-8 px-6 text-center">
           <div class="h-10 mb-6"></div>
          
          <h1 class="text-text text-xl font-bold mb-3">Connectes-toi</h1>
          <p class="text-text text-sm leading-relaxed">
            Tes calculs de rations ne seront jamais à porté de main<br>
          </p>
        </div>

        <div class="px-8 pb-8 pt-6">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <input v-model="form.email" type="email" placeholder="Ton email"
              class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              required>

            <div class="relative">
              <input v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="Mot de passe"
                class="w-full p-3 pr-10 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                required>
              <button type="button" @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                <Eye />
              </button>
            </div>

            <button type="submit"
              class="w-full bg-primary text py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition mt-6">
              Connexion
            </button>

            <p class="text-center text-xs text-text mt-4">
              Pas de compte ?
              <router-link to="/register" class="text-link font-semibold hover:underline">
                Rejoins nous!
              </router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { UserCheck } from 'lucide-vue-next';
defineOptions({
    name: 'LoginPage',
});

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { CircleUser, Eye } from 'lucide-vue-next';

const router = useRouter()

const form = ref({
  email: '',
  password: '',
  confirmPassword: ''
})

const showPassword = ref(false)
</script>