<script setup lang="ts">
import { HeartPlus } from 'lucide-vue-next';
</script>
<template>
    <div
        class="card w-full max-w-sm md:max-w-md lg:max-w-lg p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">

        <router-link to="addpet" class="flex flex-col items-center">
            <h2 class="text-xl font-bold text-gray-800 mb-2">Ajoutes ton compagnon</h2>
            <br>
            <heart-plus class="w-20 h-20 flex text-primary" />
        </router-link>

    </div>
</template>
