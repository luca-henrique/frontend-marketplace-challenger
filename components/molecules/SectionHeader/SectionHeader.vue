<script setup lang="ts">

const { title, path } = defineProps<{
  title: string
  path: string
}>();

</script>


<template>
  <div class="flex flex-row justify-between">
    <h2 class="text-[#1A1A1A] text-[32px] font-semibold">{{ title }}</h2>
    <NuxtLink :href="path" class="flex flex-row items-center gap-2">
      <h5>View All</h5>
      <img src="~/assets/icons/arrow-right-icon.svg" alt="Arrow Right Icon" class="h-4 w-4" />
    </NuxtLink>
  </div>
</template>