<script setup lang="ts">
import SectionHeader from '~/components/molecules/SectionHeader/SectionHeader.vue';
import CardProductVertical from '~/components/molecules/CardProductVertical/CardProductVertical.vue';

const { data, status, error } = await useFetch<any[]>('http://localhost:3333/product?page=1&limit=5');



const loading = status.value === 'success'

</script>

<template>
  <section class="flex flex-col justify-center items-center py-[60px]">
    <div class="w-[1320px]">
      <SectionHeader title="Produtos novos" path="products/news" />
      <div class="flex flex-row mt-4 flex-wrap gap-5">
        <div v-for="(item, index) in data.data" :key="index" v-if="loading">
          <CardProductVertical :title="item.name" :price="item.price" :image="item.image" :id="item.id" />
        </div>
      </div>
    </div>
  </section>
</template>