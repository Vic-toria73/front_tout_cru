<script setup lang="ts">
import { ref } from 'vue';
import { uploadPicture } from '../services/pictureService';

const emit = defineEmits<{
  (e: 'picture-created', id: number): void;
}>();

const imageUrl = ref('');
const altText = ref('');

// const submitPicture = async () => {
//   const response = await uploadPicture({
//     url: imageUrl.value,
//     altText: altText.value || 'Photo de mon animal'
//   });

//   emit('picture-created', response.data.id);
// };
</script>

<template>
  <div class="space-y-2">
    <label>URL de la photo</label>
   <input type="file" name="add picture" id="">

    <label>Description</label>
    <input v-model="altText" class="input" />

    <!-- <button type="button" @click="submitPicture">
      Ajouter la photo
    </button> -->
  </div>
</template>