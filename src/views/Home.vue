<script setup lang="ts">
import { Bone } from 'lucide-vue-next';
import AuthLayout from '../components/LayoutForm.vue';

defineOptions({
    name: 'HomePage',
});
</script>
<template>
    <AuthLayout title="Bienvenue sur ToutCru" description="">
        <template #icon>
            <Bone class="w-16 h-16 text-primary" />
        </template>
        <div class="text-center mb-8 space-y-1 text-gray-700">
            <p>Tu es un(e) adapte du BARF?</p>
            <p>Tu cherches un outil pour tes calculs de rations ?</p>
            <p>Et tout ça à portée de main ?</p>
            <p class="font-semibold text-gray-900">ToutCru est fait pour toi !</p>
        </div>

<div class="flex gap-4 w-full">
            <router-link 
                to="/register" 
                class="flex-1 border-2 border-primary text-primary py-3 rounded-lg font-semibold text-sm hover:bg-primary hover:text-text transition text-center" 
                aria-label="S'inscrire">
                Inscris-toi
            </router-link>
            
            <router-link 
                to="/login" 
                class="flex-1 bg-primary text-text py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition text-center" 
                aria-label="Se connecter">
                Connectes-toi
            </router-link>
        </div>
    </AuthLayout>
</template>