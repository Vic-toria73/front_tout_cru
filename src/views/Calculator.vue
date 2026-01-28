<script setup lang="ts">
import { BoneIcon } from 'lucide-vue-next';
import Layout from '../components/LayoutForm.vue';


defineOptions({
    name: 'CalcultorPage',
});
</script>

<template>
    <section class="flex-1 bg-white flex items-center justify-center">
        <img src="/pics/In_progress.jpg?url" alt="En construction"
            class="w-40 sm:w-60 md:w-80 lg:w-[420px] xl:w-[500px] h-auto" />
    </section>
    <Layout title="Calculons ToutCru" 
    description=" En cours de construction ">
        <template #icon>
            <BoneIcon class="w-16 h-16 text-primary" />
        </template>
    </Layout>
</template>