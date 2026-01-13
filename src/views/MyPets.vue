<script setup lang="ts">
import AuthLayout from '../components/AuthLayout.vue';
import { Dog } from 'lucide-vue-next';

defineOptions({
    name: 'PetsPage',
});

</script>
<template>
    <AuthLayout title="Mes animaux" description="">
        <template #icon>
            <Dog class="w-16 h-16 text-primary" />
        </template>
    </AuthLayout>
</template>