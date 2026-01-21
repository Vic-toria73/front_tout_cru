<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getBreeds, getMyAnimal } from '../services/animalService';
import { useToast } from 'vue-toastification';

const toats = useToast();
const myPets = ref({
    name: '',
    breedId: undefined as number | undefined,
    birth: '',
    weight: '',
    activityLevel: '' as 'SEDENTARY' | 'NORMAL' | 'ACTIVE' | 'VERY_ACTIVE' | '',
    lifeStage: '' as 'BABY' | 'ADULT' | 'SENIOR' | '',
    treatments: ''
});

const myPetsData = ref({
    name: '',
    breedId: undefined as number | undefined,
    birth: '',
    weight: '',
    activityLevel: '' as 'SEDENTARY' | 'NORMAL' | 'ACTIVE' | 'VERY_ACTIVE' | '',
    lifeStage: '' as 'BABY' | 'ADULT' | 'SENIOR' | '',
    treatments: ''
});

const age = new Date(myPets.value.birth);
console.log(age)


onMounted(async () => {
    try {
        const response = await getMyAnimal()
        myPets.value = response.data
        myPetsData.value = { ...response.data }

    } catch (error) {
        console.log('Erreur chargement utilisateur:', error)
        toats.error('Erreur lors du chargement de ton compte')
    }
});
</script>
<template>
    <div class="card w-full p-3 pr-10 rounded-lg bg-white border border-gray-50">
        <router-link to="">
            <h2>{{ myPets.name }}Prénom</h2>
            <ul class="rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                <li>{{ myPets.breedId }}</li>
                <li>{{ }} ans </li>
                <li>{{ myPets.weight }} kg</li>
                <li>{{ myPets.lifeStage }}1</li>
                <li>{{ myPets.activityLevel }}2</li>
            </ul>
        </router-link>
    </div>

</template>
