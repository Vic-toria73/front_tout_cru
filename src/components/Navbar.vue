<template>
<div class="bg-primary p-4 flex justify-between items-center">
    <div class="text">ToutCru</div>
    <div class="flex gap-4">
      <button class="text text-2xl"><PawPrint /></button>
      <button class="text text-2xl"><Menu /></button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Menu, PawPrint } from 'lucide-vue-next';

defineOptions({
  name: 'AppNavbar',
});
</script>
