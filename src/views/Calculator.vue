<script setup lang="ts">
import { Bone, BoneIcon, Calculator, CalculatorIcon } from 'lucide-vue-next';
import AuthLayout from '../components/AuthLayout.vue';

    defineOptions({
    name: 'CalcultorPage',
});
</script>
<template>
    <AuthLayout title="Calculons ToutCru" description="">
    <template #icon>
      <BoneIcon class="w-16 h-16 text-primary" />
    </template>
    </AuthLayout>
</template>