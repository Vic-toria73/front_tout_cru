<script setup lang="ts">
import PasswordInput from '../components/PasswordInput.vue';
import AuthLayout from '../components/AuthLayout.vue';
import { Dog } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import { getCurrentUser, updateMyAccount, updateMyPassword } from '../services/userService';

defineOptions({
  name: 'AccountPage',
});

const user = ref({
  email: '',
  firstName: '',
});

const initialData = ref({
  email: '',
  firstName: '',
})

onMounted(async () => {
  try {
    const response = await getCurrentUser();
    //stock les données
    user.value = response.data
    initialData.value = { ...response.data }; //copie pour comparer

    //pré-remplir le form
    user.value.email = response.data.email;
    user.value.firstName = response.data.firstName;

  } catch (error) {
    console.log('Erreur chargement utilisateur:', error);
    alert('Erreur lors du chargement de ton compte');
  }
})

const handleSubmit = async () => {
  try {
    //verifie si changement
    const profileChanged =
      user.value.email !== initialData.value.email ||
      user.value.firstName !== initialData.value.firstName;

    if (!profileChanged) {
      alert('Aucune modification détectée');
      return;
    }

    // appel l'api
    await updateMyAccount({
      email: user.value.email,
      firstName: user.value.firstName
    });

    initialData.value = { ...user.value };

    alert('Profil mis à jour !')
  } catch (error) {
    console.log('Erreur', error);
    alert('Erreur lors de la modification');

  }
};

const passwordForm = ref({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
});

const handleSubmitPassword = async () => {
  try {
    if (!passwordForm.value.newPassword || !passwordForm.value.confirmPassword || !passwordForm.value.oldPassword) {
      alert('Veuillez remplir tous les champs');
      return;
    };

    if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    };

    await updateMyPassword({
      oldPassword: passwordForm.value.oldPassword,
      newPassword: passwordForm.value.newPassword,
      confirmPassword: passwordForm.value.confirmPassword
    });

    passwordForm.value = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    };

    alert('Mot de passe mis à jour !')
  } catch (error) {
    console.error('Erreur:', error);
    alert('Erreur lors du changement de mot de passe');
  }
};
</script>
<template>
  <AuthLayout :title="`Bienvenue ${user.firstName} sur ton Compte`" description="Tu peux le modifier ici ⬇️">
    <template #icon>
      <Dog class="w-16 h-16 text-primary" />
    </template>

    <form @submit.prevent="handleSubmit" class="space-y-4 mb-8">
      <h3 class="font-semibold text-lg">Modifier mon profil</h3>

      <input v-model="user.email" type="email" placeholder="Ton email"
        class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        required>

      <input v-model="user.firstName" type="text" placeholder="Ton prénom"
        class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        required>

      <button type="submit"
        class="w-full bg-primary text py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition">
        Modifier mon profil
      </button>
    </form>


    <form @submit.prevent="handleSubmitPassword" class="space-y-4">
      <h3 class="font-semibold text-lg">Changer mon mot de passe</h3>

      <PasswordInput v-model="passwordForm.oldPassword" placeholder="Ancien mot de passe" />

      <PasswordInput v-model="passwordForm.newPassword" placeholder="Nouveau mot de passe" />

      <PasswordInput v-model="passwordForm.confirmPassword" placeholder="Confirmation du nouveau mot de passe" />

      <button type="submit"
        class="w-full bg-primary text py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition">Changer mon mot
        de
        passe
      </button>
    </form>
  </AuthLayout>
</template>