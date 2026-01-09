<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthLayout from '@/components/AuthLayout.vue';
import PasswordInput from '@/components/PasswordInput.vue';

defineOptions({
  name: 'RegisterPage',
});

const router = useRouter();
const shouldPlayBark =ref(false);

const form = ref({
  email: '',
  password: '',
  confirmPassword: ''
});

const handleSubmit = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert('Les mots de passe ne correspondent pas!')
    return
  }

  try {
    // TODO: Appel API pour l'inscription
    console.log('Inscription:', form.value);
    
    // Simulation d'une inscription réussie
    // await registerAPI(form.value);
    
    // Déclencher le son d'aboiement
    shouldPlayBark.value = true;
    
    // Attendre un peu avant de rediriger
    setTimeout(() => {
      router.push('/login');
    }, 1500);
    
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    alert('Erreur lors de la création du compte');
  }
};
</script>

<template>
  <AuthLayout title="Créer un compte"
    description="Envie de te simplifier la vie pour calculer les rations de ton compagnon rejoins nous."
    :play-sound="shouldPlayBark"
    sound-url="/sounds/bark.mp3"
    success-text="Compte créé ! 🏆">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <input v-model="form.email" type="email" placeholder="Ton email"
        class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        required>

      <PasswordInput v-model="form.password" placeholder="Mot de passe" />

      <PasswordInput v-model="form.confirmPassword" placeholder="Confirmation mot de passe" />
      <button type="submit"
        class="w-full bg-primary text py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition mt-6">
        Créer mon compte
      </button>
      <p class="text-center text-xs text-text mt-4">Déjà un compte ?
        <router-link to="/login" class="text-link font-semibold hover:underline">
          Connectes-toi!
        </router-link>
      </p>
    </form>
  </AuthLayout>
</template>
