<script setup lang="ts">
defineProps<{
  text: string;
  ariaLabel?: string;
  type?: 'button' | 'submit';
}>();

defineEmits<{
  click: [];
}>();
</script>

<template>
  <button 
    :type="type || 'button'"
    @click="$emit('click')"
    :aria-label="ariaLabel"
    class="w-full bg-primary text py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition mt-6"
  >
    {{ text }}
  </button>
</template>