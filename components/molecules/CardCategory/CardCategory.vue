<script setup lang="ts">

const { image, name, path } = defineProps<{
  name: string
  image: string
  path: string
}>();


</script>

<template>
  <NuxtLink :href="path"
    class="border max-w-[200px] border-[#E6E6E6] px-1 py-4 flex flex-col justify-center items-center rounded-md hover:border-[#2C742F] cursor-pointer ">
    <img :src="image" alt="category" lazy />
    <h5 class="text-[#1A1A1A] font-medium text-lg mt-4">{{ name }}</h5>
  </NuxtLink>
</template>