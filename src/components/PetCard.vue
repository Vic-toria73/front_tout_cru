<script setup lang="ts">
import { computed } from 'vue';
import AuthLayout from '../components/AuthLayout.vue'
import { Dog } from 'lucide-vue-next'
import AddPetCard from '../components/AddPetCard.vue';
import PetCard from '../components/PetCard.vue';
import { activityLevels, lifeStages, getMyAnimal, type Animal } from '../services/animalService';

defineOptions({
  name: 'PetsPage',
});

const props = defineProps<{ animal: Animal }>();

const activityLabel = computed(() => {
  if (!props.animal.activityLevel) return 'Non renseigné';
  const activity = activityLevels.find(a => a.value === props.animal.activityLevel);
  return activity?.label || props.animal.activityLevel;
});


const lifeStageLabel = computed(() => {
  if (!props.animal.lifeStage) return 'Non renseigné';
  const stage = lifeStages.find(s => s.value === props.animal.lifeStage);
  return stage?.label || props.animal.lifeStage;
});

const breedName = computed(() => {
  return props.animal.breed?.name || 'Race inconnue';
});

function age(birth: string): number {
  const today = new Date();
  const birthDate = new Date(birth);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const displayAge = computed(() => {
  const years = age(props.animal.birth);

  if (years === 0) {
    const today = new Date();
    const birthDate = new Date(props.animal.birth);
    const months = (today.getFullYear() - birthDate.getFullYear()) * 12 +
      (today.getMonth() - birthDate.getMonth());
    return `${months} mois`;
  } else if (years === 1) {
    return '1 an';
  } else {
    return `${years} ans`;
  }
});
</script>

<template>
<div class="card w-full max-w-sm md:max-w-md lg:max-w-lg p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
    <router-link :to="`/animals/${animal.id}`" class="block">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span class="text-2xl">🐕</span>
        </div>
        <h2 class="text-xl font-bold text-gray-800">{{ animal.name }}</h2>
      </div>
      
      <ul class="space-y-2 text-sm text-gray-600">
        <li><span class="font-semibold">Race :</span> {{ breedName }}</li>
        <li><span class="font-semibold">Âge :</span> {{ displayAge }}</li>
        <li><span class="font-semibold">Poids :</span> {{ animal.weight }} kg</li>
        <li><span class="font-semibold">Étape de vie :</span> {{ lifeStageLabel }}</li>
        <li><span class="font-semibold">Niveau d'activité :</span> {{ activityLabel }}</li>
        <li v-if="animal.treatments" class="text-xs text-orange-600">
          <span class="font-semibold">⚠️ Traitements :</span> {{ animal.treatments }}
        </li>
      </ul>
    </router-link>
  </div>
</template>