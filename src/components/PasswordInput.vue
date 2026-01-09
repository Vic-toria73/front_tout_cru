<script setup lang="ts">
import { ref } from 'vue';
import { Eye } from 'lucide-vue-next';

defineProps<{
    modelValue: string;
    placeholder?: string;
}>();

defineEmits<{
    'update:modelValue': [value: string];
}>();

const showPassword = ref(false);
</script>
<template>
    <div class="relative">
        <input :type="showPassword ? 'text' : 'password'" :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            class="w-full p-3 pr-10 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            required>
        <button type="button" @click="showPassword = !showPassword"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
            :aria-label="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'">
            <Eye />
        </button>
    </div>
</template>