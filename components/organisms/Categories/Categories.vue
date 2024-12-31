<script setup lang="ts">

import SectionHeader from '~/components/molecules/SectionHeader/SectionHeader.vue';
import CardCategory from '~/components/molecules/CardCategory/CardCategory.vue';

</script>

<template>
  <section class="flex flex-col justify-center items-center py-[40px]">
    <div class="w-[1340px]">
      <SectionHeader />
      <div class="flex flex-row mt-4 flex-wrap gap-5">
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </div>
    </div>
  </section>
</template>