<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Dog } from 'lucide-vue-next';
import AddPetCard from '../components/cards/AddPetCard.vue';
import PetCard from '../components/cards/PetCard.vue';
import { getMyAnimal, type Animal } from '../services/animalService';
import LayoutCards from '../components/LayoutCards.vue';

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
    <LayoutCards title="Mes animaux" description="">
        <template #icon>
            <Dog class="w-16 h-16 text-primary" />
        </template>

        <div class="p-4 md:col-span-2">
            <div v-if="animals.length === 0" class="text-gray-500 text-center">
                Vous n'avez pas encore d'animaux enregistrés.
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <PetCard v-for="animal in animals" :key="animal.id" :animal="animal"/>
                <AddPetCard class="md:col-span"/>
            </div>
        </div>
    </LayoutCards>
</template>
