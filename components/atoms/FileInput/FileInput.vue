<script setup lang="ts">
export interface FileProps {
  file: object;
  source: string;
}

interface FileInputProps {
  handelFileUpload: (files: FileProps) => void;
}

const props = defineProps<FileInputProps>();

const previewUrl = ref("");

const onFileChange = (e: any) => {
  const files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  const src = URL.createObjectURL(files[0]);
  previewUrl.value = src;
  props.handelFileUpload({ file: files[0], source: src });
};

</script>

<template>
  <label class="image-product">
    <div v-if="!previewUrl" class="default-container">
      <img src="@/assets/upload.svg" class="icon" alt="upload" />
      <b>Escolha uma imagem</b>
    </div>
    <div class="preview-image" v-if="previewUrl">
      <img :src="previewUrl" alt="upload" width="100%" height="220" />
    </div>
    <input
      for="image-product"
      type="file"
      id="media"
      accept="image/*"
      multiple
      @change="onFileChange"
    />
  </label>
</template>

<style>
#media {
  display: none;
}

.image-product {
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100% !important;
  height: 220px;
}

.preview-image {
  width: 100% !important;
  height: 220px;
  border-radius: 8px;
  object-fit: contain;
}

.preview-image img {
  border-radius: 8px;
}

.icon {
  width: 40px;
  height: 40px;
}

.default-container{
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  gap: 8px;
}
</style>
