<script setup lang="ts">
import AuthLayout from '../components/AuthLayout.vue'
import { Dog } from 'lucide-vue-next'
import AddPet from './AddPet.vue'
import AddPetCard from '../components/AddPetCard.vue';
import PetCard from '../components/PetCard.vue';

defineOptions({
    name: 'PetsPage',
})
</script>
<template>
    <AuthLayout title="Mes animaux" description="">
        <template #icon>
            <Dog class="w-16 h-16 text-primary" />
        </template>
<AddPetCard/>
<PetCard/>
        <div class="flexbox"></div>
    </AuthLayout>
</template>
