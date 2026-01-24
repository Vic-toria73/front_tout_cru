<script setup lang="ts">
import { Bone } from 'lucide-vue-next';
import AuthLayout from '../components/AuthLayout.vue';

    defineOptions({
    name: 'HomePage',
});
</script>
<template>
    <AuthLayout title="Bienvenue sur ToutCru" description="Tu es un(e) adapte du BARF? Tu cherches un outil pour tes calculs de rations ? 
    Et tout ça à portée de main ? ToutCru est fait pour toi !">
    <template #icon>
      <Bone class="w-16 h-16 text-primary" />
    </template>
    </AuthLayout>
</template>