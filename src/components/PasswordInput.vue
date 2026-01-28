<script setup lang="ts">
import { computed, ref } from 'vue';
import { Eye } from 'lucide-vue-next';

const props = defineProps<{
    modelValue: string;
    placeholder?: string;
    minLength?: number;
}>();

defineEmits<{
    'update:modelValue': [value: string];
}>();

const showPassword = ref(false);

const errorMessage = computed(() => {
    if (!props.minLength) return '';
    if (props.modelValue.length === 0) return '';
    if (props.modelValue.length < props.minLength) {
        return `Minimum ${props.minLength} caractères requis`;
    };
    return '';
});

</script>
<template>
    <div class="relative">
        <input :type="showPassword ? 'text' : 'password'" :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            class="w-full p-3 pr-10 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1"
            required :class="errorMessage
                ? 'border-red-500 focus:ring-red'
                : 'border-gray-300 focus:border-primary focus:ring-primary'">

        <button type="button" @click="showPassword = !showPassword"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
            :aria-label="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'">
            <Eye aria-label="Cacher / voir"/>
        </button>
        <p v-if="errorMessage" class="mt-1 text-sm text-red-500">
            {{ errorMessage }}
        </p>
    </div>
</template>