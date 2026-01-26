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
</script>
<template>
    <input :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            class="w-full p-3 pr-10 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none "
            required >
</template>