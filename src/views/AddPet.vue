<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { createAnimal, getBreeds, type AnimalCreate } from '../services/animalService';
import { Dog } from 'lucide-vue-next';
import { activityLevels, lifeStages } from '../services/animalService';
import Button from '../components/Button.vue';
import AddPicture from '../components/AddPicture.vue';
import LayoutForm from '../components/LayoutForm.vue';

defineOptions
    ({
        name: 'AddMyPet',
    });

const router = useRouter();
const toast = useToast();
const shouldPlayBark = ref(false);

const formMyPet = ref({
    species: '',
    name: '',
    breedId: undefined as number | undefined,
    pictureId: '',
    birth: '',
    weight: 0,
    activityLevel: '' as 'SEDENTARY' | 'NORMAL' | 'ACTIVE' | 'VERY_ACTIVE' | '',
    lifeStage: '' as 'BABY' | 'ADULT' | 'SENIOR' | '',
    treatments: ''
});

const today = new Date().toISOString().split('T')[0];

const breeds = ref<Array<{ id: number; name: string }>>([]);

const validateWeight = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value = parseFloat(input.value);
    
    if (value < 0.5) {
        input.value = '0.5';
        formMyPet.value.weight = 0.5;
    }
};

onMounted(async () => {
    try {
        breeds.value = await getBreeds();
    } catch (error) {
        console.error('Erreur chargeemnt races:', error);
    };
});

const handleSubmitAddPet = async () => {
    try {
        if (
            !formMyPet.value.name ||
            !formMyPet.value.breedId ||
            !formMyPet.value.birth ||
            !formMyPet.value.activityLevel ||
            !formMyPet.value.lifeStage
        ) {
            toast.error('Veuillez remplir tous les champs obligatoires');
            return;
        }
        const weight = Number(formMyPet.value.weight);
        if (isNaN(weight) || weight <= 0) {
            toast.error('Le poids doit être un nombre valide');
            return;
        }

        const animalData: AnimalCreate = {
            species: 'DOG',
            name: formMyPet.value.name,
            breedId: formMyPet.value.breedId,
            birth: formMyPet.value.birth,
            weight: weight,
            activityLevel: formMyPet.value.activityLevel,
            lifeStage: formMyPet.value.lifeStage,
            treatments: formMyPet.value.treatments || undefined,
        };

        await createAnimal(animalData);
        console.log(formMyPet.value);
        toast.success('Profil créé ! 🐕');
        shouldPlayBark.value = true;

        setTimeout(() => {
            router.push('/mypets');
        }, 2000);

    } catch (error) {
        console.error('Erreur:', error);
        toast.error('Erreur lors de la création');
    }
};
</script>
<template>
    <LayoutForm :title="'Création du profil de ton compagnon'"
        description="" :play-sound="shouldPlayBark"
        sound-url="/sounds/bark.mp3">
        <template #icon>
            <Dog class="w-16 h-16 text-primary" />
        </template>
                <div class="text-center mb-8 space-y-1 text-gray-700">
            <p>* Renseignes tous les champs.</p>
            <p>Pour le poids c'est en kg au min 0,5kg</p>
        </div>

        <form @submit.prevent="handleSubmitAddPet" class="space-y-4">
            <label class="text-text">Quel est son prénom ? *
                <input v-model="formMyPet.name" type="name"
                    class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    required aria-label="Prénom de ton compagnon">
            </label>

            <label class="text-text">Quelle est sa race ? *
                <select v-model="formMyPet.breedId"
                    class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    required aria-label="Choix de la race">
                    <option value="" disabled>Choisir la race *</option>
                    <option v-for="breed in breeds" :key="breed.id" :value="breed.id">
                        {{ breed.name }}
                    </option>
                </select>
            </label>

            <label class="text-text">Quelle est sa date de naissance ? *
                <input v-model="formMyPet.birth" type="date" :max="today"
                    class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    required aria-label="Date de naissance de ton compagnon">
            </label>

            <label class="text-text">Quel est son poids en kg ? *
                <input v-model.number="formMyPet.weight" type="number" step="0.5" min="0.5" @input="validateWeight"
                    class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    aria-label="Indiquer le poids en kg">
            </label>

            <label class="text-text">Quel est son activité ? *
                <select v-model="formMyPet.activityLevel"
                    class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    aria-label="Choisir son activité physique">
                    <option v-for="level in activityLevels" :key="level.value" :value="level.value">
                        {{ level.label }}
                    </option>
                </select>
            </label>

            <label class="text-text">Quelle est la catégorie d’âge de ton compagnon ? *
                <select v-model="formMyPet.lifeStage"
                    class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    aria-label="Choisir son activité physique">
                    <option v-for="life in lifeStages" :key="life.value" :value="life.value">
                        {{ life.label }}
                    </option>
                </select>
            </label>

            <label class="text-text">Ton compagnon prend t-il un traitement ou est-il allergique ?
                <textarea v-model="formMyPet.treatments" placeholder="Traitements ou allergies"
                    class="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    rows=" 3"></textarea>
            </label>
            <Button type="submit" text="Créer le profil" ariaLabel="Créer le profil de mon animal" />
        </form>
    </LayoutForm>
</template>