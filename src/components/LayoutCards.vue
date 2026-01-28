<script setup lang="ts">
import { ref, watch } from 'vue';
import { CircleUser } from 'lucide-vue-next';

const props = defineProps<{
    title: string;
    description: string;
    playSound?: boolean;
    soundUrl?: string;
}>();

const audioElement = ref<HTMLAudioElement | null>(null);

watch(() => props.playSound, (newValue) => {
    if (newValue && audioElement.value) {
        playBarkSound();
    }
});

const playBarkSound = async () => {
    try {
        if (audioElement.value) {
            audioElement.value.currentTime = 0;
            await audioElement.value.play();
        }
    } catch (error) {
        console.error('Erreur lors de la lecture du son:', error);
    }
};
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="min-h-52 bg-background flex flex-col relative">
      <div class="absolute left-1/2 -translate-x-1/2 top-[calc(100%-40px)] z-10">
        <div class="bg-background-alt w-20 h-20 rounded-full flex items-center justify-center">
          <slot name="icon" />
        </div>

        <h1 class="text-xl font-bold mt-2">{{ title }}</h1>
        <p class="text-sm text-gray-600">{{ description }}</p>
      </div>
    </div>

    <div class="bg-background-alt p-6 rounded-t-3xl pt-16 flex-grow">
      <div class="w-full max-w-7xl mx-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
