<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthLayout from '../components/AuthLayout.vue';
import PasswordInput from '../components/Input.vue';
import { register } from '../services/authService';
import { useToast } from 'vue-toastification';
import Button from '../components/Button.vue';

defineOptions({
  name: 'RegisterPage',
});

const router = useRouter();
const toast = useToast();
const shouldPlayBark = ref(false);

const form = ref({
  email: '',
  firstName: '',
  password: '',
  confirmPassword: '',
});

const handleSubmit = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    toast.warning('Les mots de passe ne correspondent pas.');
    return;
  };

  try {
    const response = await register(form.value);
    console.log('Inscription réussie:', response);

    toast.success('Compte créé ! 🏆');
    shouldPlayBark.value = true;

    setTimeout(() => {
      router.push('/login');
    }, 1500);
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
    toast.error('Erreur lors de la création du compte.');
  };
}
</script>

<template>
  <AuthLayout title="Créer un compte"
    description="Envie de te simplifier la vie pour calculer les rations de ton compagnon rejoins nous."
    :play-sound="shouldPlayBark" sound-url="/sounds/bark.mp3">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <input v-model="form.email" type="email" placeholder="Ton email"
        class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        required />

      <input v-model="form.firstName" type="firstName" placeholder="Ton prénom"
        class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        required />

      <PasswordInput v-model="form.password" placeholder="Mot de passe" />

      <PasswordInput v-model="form.confirmPassword" placeholder="Confirmation mot de passe" />
      <Button  text="Créer mon compte" ariaLabel="Validation de la création de mon compte" type="submit" />

      <p class="text-center text-xs text-text mt-4">
        Déjà un compte ?
        <router-link to="/login" class="text-link font-semibold hover:underline" aria-label="Se connecter">
          Connectes-toi!
        </router-link>
      </p>
    </form>
  </AuthLayout>
</template>
