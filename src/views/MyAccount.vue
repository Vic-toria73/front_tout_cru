<script setup lang="ts">
import AuthLayout from '../components/AuthLayout.vue';
import { Dog } from 'lucide-vue-next';

defineOptions({
    name: 'AccountPage',
});

</script>
<template>
    <AuthLayout title="Bienvenue sur ton Compte {{ firstName.value }}" description="">
        <template #icon>
            <Dog class="w-16 h-16 text-primary" />
        </template>
    </AuthLayout>
</template>