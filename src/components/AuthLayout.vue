<script setup lang="ts">
import { ref, watch } from 'vue';
import { CircleUser, UserCheck } from 'lucide-vue-next';

const props = defineProps<{
    title: string;
    description: string;
    playSound?: boolean;
    soundUrl?: string;
    successText?: string;
}>();

const audioElement = ref<HTMLAudioElement | null>(null);
const showSuccess = ref(false);

watch(() => props.playSound, (newValue) => {
    if (newValue && audioElement.value) {
        playBarkSound();
    }
});

const playBarkSound = async () => {
    try {
        showSuccess.value = true;
        if (audioElement.value) {
            audioElement.value.currentTime = 0;
            await audioElement.value.play();
        }
        setTimeout(() => {
            showSuccess.value = false;
        }, 3000);
    } catch (error) {
        console.error('Erreur lors de la lecture du son:', error);
    }
};
</script>

<template>
    <div>
        <Transition name="success">
            <div v-if="showSuccess" class="success-message">
                <div class="success-icon">
                    <UserCheck class="w-5 h-5" />
                </div>
                {{ successText || 'Opération réussie !' }}
            </div>
        </Transition>

        <div class="min-h-52 bg-background flex flex-col relative">
            <div class="absolute left-1/2 -translate-x-1/2 top-[calc(100%-40px)] z-10">
                <div class="bg-background-alt w-20 h-20 rounded-full flex items-center justify-center">
                    <slot name="icon">
                        <CircleUser class="w-16 h-16 text-primary" />
                    </slot>
                </div>
            </div>
        </div>


        <main class="flex-1 bg-background-alt flex items-center justify-center p-4 rounded-t-3xl pt-16">
            <div class="w-full max-w-md">
                <div class="rounded-3xl overflow-hidden">
                    <div class="pb-8 px-6 text-center">
                        <div class="h-10 mb-6"></div>

                        <h1 class="text-text text-xl font-bold mb-3"> {{ title }}</h1>
                        <p class="text-text text-sm leading-relaxed">
                            {{ description }}
                        </p>
                    </div>

                    <div class="px-8 pb-8 pt-6">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </main>
        <audio ref="audioElement" :src="soundUrl" preload="auto"></audio>
    </div>
</template>