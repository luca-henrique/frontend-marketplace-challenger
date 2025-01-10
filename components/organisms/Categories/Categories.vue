<script setup lang="ts">
import SectionHeader from '~/components/molecules/SectionHeader/SectionHeader.vue';
import CardCategory from '~/components/molecules/CardCategory/CardCategory.vue';

import { useFetch } from '#app';

interface Category {
  name: string;
  image: string;
  path: string
}

const { data, status, error } = await useFetch<Category[]>('http://localhost:3333/api/category');

</script>

<template>
  <section class="flex flex-col justify-center items-center py-[40px]">
    <div class="w-[1300px]">
      <SectionHeader title="Categorias populares" path="products" />
      <div v-if="error">Erro ao carregar categorias: {{ error.message }}</div>
      <div class="flex flex-row mt-4 flex-wrap gap-5">
        <div v-for="(item, index) in data.data" :key="index">
          <CardCategory :image="item.image" :name="item.name" :path="`products/${item.path}`" />
        </div>
      </div>
    </div>
  </section>
</template>