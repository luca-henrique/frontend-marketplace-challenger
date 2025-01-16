<script setup lang="ts">

import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const changeLimit = (limit: number) => {
  router.push({ query: { ...route.query, limit, page: 1 } }); // Redefine a página para 1 ao alterar o limite
};

const changeOrderBy = (orderBy: string) => {
  router.push({ query: { ...route.query, orderBy, page: 1 } }); // Redefine a página para 1 ao alterar a ordenação
};

const { perPage, totalProducts } = defineProps<{
  perPage: number
  totalProducts: number
}>();

</script>

<template>
  <div class="flex flex-row justify-between mb-4">
    <div class="limit-selector">
      <label for="limit">Itens por página:</label>
      <select id="limit" :value="perPage" @change="changeLimit(Number($event.target.value))">
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="18">18</option>
      </select>
    </div>
    <div>
      <select type="select" :value="route.query.orderBy || 'asc'" @change="changeOrderBy($event.target.value)"
        class="border-2 border-[#E6E6E6] rounded-lg p-2 w-[140px]">
        <option value="asc">Menor preço</option>
        <option value="desc">Maior preço</option>
      </select>
    </div>

    <div>
      <h5>{{ totalProducts }} produtos</h5>
    </div>
  </div>
</template>