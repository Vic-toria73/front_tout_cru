<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import AuthLayout from '../components/AuthLayout.vue';
import PasswordInput from '../components/PasswordInput.vue';
import { login } from '../services/authService';
import { PawPrint } from 'lucide-vue-next';
import { useToast } from 'vue-toastification';
import Input from '../components/Input.vue';

defineOptions({
  name: 'LoginPage',
})

const router = useRouter()
const toast = useToast()
const shouldPlayBark = ref(false)

const form = ref({
  email: '',
  password: '',
})

const handleSubmit = async () => {
  try {
    const response = await login(form.value)
    console.log('Connexion:', response)

    toast.success('Connexion réussie ! 🥳')
    shouldPlayBark.value = true

    setTimeout(() => {
      router.push('/home')
    }, 1500)
  } catch (error) {
    console.error('Erreur de connexion', error)
    toast.error('Erreur lors de la connexion')
  }
}
</script>

<template>
  <AuthLayout title="Connecte-toi" description="Tes calculs de rations seront toujours à portée de patte"
    :play-sound="shouldPlayBark" sound-url="/sounds/bark.mp3">
    <template #icon>
      <PawPrint class="w-16 h-16 text-primary -rotate-45" />
    </template>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <Input v-model="form.email" type="email" placeholder="Ton email"
        class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        required />

      <PasswordInput v-model="form.password" placeholder="Mot de passe" />

      <button type="submit"
        class="w-full bg-primary py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition mt-6">
        Connexion
      </button>

      <p class="text-center text-xs text-text mt-4">
        Pas de compte ?
        <router-link to="/register" class="text-link font-semibold hover:underline">
          Rejoins-nous !
        </router-link>
      </p>
    </form>
  </AuthLayout>
</template>
