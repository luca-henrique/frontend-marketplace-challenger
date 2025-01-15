<script setup lang="ts">
import CardProductVertical from '~/components/molecules/CardProductVertical/CardProductVertical.vue';
import Button from '~/components/atoms/Button/Button.vue';

import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
}

interface Pagination {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  nextPageUrl: string;
  previousPageUrl: string;
}

interface Response {
  data: Product[];
  meta: Pagination;
}

// Rota e router para manipular os parâmetros da URL
const route = useRoute();
const router = useRouter();
const loading = ref(false);
const products = ref<Product[]>([]);

const pagination = ref<Pagination>({
  total: 0,
  perPage: 6,
  currentPage: parseInt(route.query.page as string) || 1,
  lastPage: 0,
  nextPageUrl: '',
  previousPageUrl: '',
});


const fetchProducts = async () => {

  loading.value = true;

  const page = route.query.page || 1;
  const limit = route.query.limit || 6;
  const orderBy = route.query.orderBy || 'asc';
  const search = route.query.search || ''

  try {
    const { data, error } = await useFetch<Response>(`http://localhost:3333/product`, {
      query: {
        page,
        limit,
        orderBy,
        search,
      },
    });

    if (data.value) {
      products.value = data.value.data || [];
      pagination.value = {
        ...pagination.value,
        total: data.value.meta.total,
        perPage: data.value.meta.perPage,
        currentPage: data.value.meta.currentPage,
        lastPage: data.value.meta.lastPage,
        nextPageUrl: data.value.meta.nextPageUrl,
        previousPageUrl: data.value.meta.previousPageUrl,
      };
    }
    return { products: products.value, error };

  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  } finally {
    loading.value = false;
  }

};



const handlePageChange = (newPage: number) => {
  pagination.value.page = newPage;
  router.push({
    path: route.path,
    query: {
      ...route.query,
      page: newPage,
    },
  });
};




const changeLimit = (limit: number) => {
  router.push({ query: { ...route.query, limit, page: 1 } }); // Redefine a página para 1 ao alterar o limite
};

const changeOrderBy = (orderBy: string) => {
  router.push({ query: { ...route.query, orderBy, page: 1 } }); // Redefine a página para 1 ao alterar a ordenação
};

watch(() => route.query, fetchProducts, { immediate: true });


</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex w-full bg-black h-[120px]">
      <div class="text-white text-2xl font-bold">Produtos</div>
    </div>
    <div class="flex flex-row w-[1320px] gap-4 my-6">
      <div class="flex flex-col w-[312px]">
        <Button text="Filtrar" />
        <div>
          <fieldset id="group1">
            <div class="inline-flex items-center">
              <label class="relative flex items-center cursor-pointer" for="html">
                <input name="framework" type="radio"
                  class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#000] checked:border-[#00B207] transition-all"
                  id="html">
                <span
                  class="absolute bg-[#00B207] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                </span>
              </label>
              <label class="ml-2 text-slate-600 cursor-pointer text-sm" for="html">HTML(10)</label>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div class="flex flex-row justify-between mb-4">
          <div class="limit-selector">
            <label for="limit">Itens por página:</label>
            <select id="limit" :value="pagination.perPage" @change="changeLimit(Number($event.target.value))">
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
            <h5>{{ products.length }} produtos</h5>
          </div>
        </div>
        <div v-if="loading">Carregando...</div>
        <div class="flex flex-row flex-wrap gap-5" v-else>
          <div v-for="(item, index) in products" :key="index">
            <CardProductVertical :title="item.name" :price="item.price" :image="item.image" :id="item.id"
              :stock="item.stock" size="large" />
          </div>
        </div>
        <div class="flex flex-row justify-center items-center gap-4 mt-4">
          <Button :disabled="!pagination.previousPageUrl" @click="handlePageChange(pagination.currentPage - 1)">
            Anterior
          </Button>

          <span>Página {{ pagination.currentPage }} de {{ pagination.lastPage }}</span>

          <Button :disabled="!pagination.nextPageUrl" @click="handlePageChange(pagination.currentPage + 1)">
            Próxima
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>