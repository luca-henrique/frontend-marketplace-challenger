<script setup lang="ts">

const { total, img, path } = defineProps<{
  total?: number,
  img: string,
  path: string
}>()

const isExistTotal = total !== undefined

</script>

<template>
  <NuxtLink class="flex flex-row relative items-center" :href="path">
    <img :src="img" alt="Cart Icon" class="h-8 w-8" />
    <p v-if="isExistTotal"
      class="absolute -top-1 w-6 h-6 -right-2 flex items-center justify-center bg-green-500 font-light text-xs text-white rounded-full border-2 border-white">
      {{ total }}</p>
  </NuxtLink>
</template>