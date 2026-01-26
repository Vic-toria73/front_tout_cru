<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AuthLayout from '../components/AuthLayout.vue';
import { Dog } from 'lucide-vue-next';
import AddPetCard from '../components/cards/AddPetCard.vue';
import PetCard from '../components/cards/PetCard.vue';
import { getMyAnimal, type Animal } from '../services/animalService';

defineOptions({
    name: 'PetsPage',
});

const animals = ref<Animal[]>([]);

onMounted(async () => {
    try {
        animals.value = await getMyAnimal()
        console.log(animals.value);

    } catch (error) {
        console.error("Erreur lors de la récupération des animaux :", error);
    }
});
</script>
<template>
    <AuthLayout title="Mes animaux" description="">
        <template #icon>
            <Dog class="w-16 h-16 text-primary" />
        </template>

        <div class="p-4">
            <div v-if="animals.length === 0" class="text-gray-500">
                Vous n'avez pas encore d'animaux enregistrés.
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <PetCard v-for="animal in animals" :key="animal.id" :animal="animal" class="md:col-span-2" />
                <AddPetCard />
            </div>
        </div>
    </AuthLayout>
</template>
