<script setup lang="ts">
import SectionHeader from '~/components/molecules/SectionHeader/SectionHeader.vue';
import CardProductVertical from '~/components/molecules/CardProductVertical/CardProductVertical.vue';
</script>


<template>
  <section class="flex flex-col justify-center items-center py-[60px]">
    <div class="w-[1320px]">
      <SectionHeader title="Produtos em destaque" path="products/featured" />
      <div class="flex flex-row mt-4 flex-wrap gap-5">
        <CardProductVertical />
        <CardProductVertical />
        <CardProductVertical />
        <CardProductVertical />
        <CardProductVertical />
      </div>
    </div>
  </section>
</template>