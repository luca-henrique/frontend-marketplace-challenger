<script setup lang="ts">
import CardProductVertical from "~/components/molecules/CardProductVertical/CardProductVertical.vue";
import Button from "~/components/atoms/Button/Button.vue";

import HeaderFilterProduct from "~/components/molecules/HeaderFilterProduct/HeaderFilterProduct.vue";
import OptionSearchProductByCategory from "~/components/molecules/OptionSearchProductByCategory/OptionSearchProductByCategory.vue";

import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

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
  page: number;
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
  nextPageUrl: "",
  previousPageUrl: "",
  page: 0,
});

const minPrice = ref(Number(route.query.minPrice) || 0);
const maxPrice = ref(Number(route.query.maxPrice) || 1000);

const fetchProducts = async () => {
  loading.value = true;

  const category = route.query.category || "";
  const search = route.query.search || "";
  const page = route.query.page || 1;
  const limit = route.query.limit || 6;
  const orderBy = route.query.orderBy || "asc";

  try {
    const { data, error } = await useFetch<Response>(
      `http://localhost:3333/product`,
      {
        query: {
          page,
          limit,
          orderBy,
          search,
          category,
          minPrice: minPrice.value,
          maxPrice: maxPrice.value,
        },
      }
    );

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
    console.error("Erro ao buscar produtos:", error);
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


watch(() => route.query, fetchProducts, { immediate: true });

let debounceTimeout: ReturnType<typeof setTimeout> | null = null;
const debounceUpdateRoute = (callback: () => void, delay = 500) => {
  if (debounceTimeout) clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(callback, delay);
};

const validatePrices = () => {
  if (minPrice.value > maxPrice.value) {
    minPrice.value = maxPrice.value;
  }
};

watch([minPrice, maxPrice], ([newMin, newMax]) => {
  debounceUpdateRoute(() => {
    router.push({
      query: {
        ...route.query,
        minPrice: newMin,
        maxPrice: newMax,
      },
    });
  });
});

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex w-full bg-black h-[120px]">
      <div class="text-white text-2xl font-bold">Produtos</div>
    </div>
    <div class="flex flex-row w-[1320px] gap-4 my-6">
      <div class="flex flex-col w-[312px]">
        <OptionSearchProductByCategory />
        <div class="flex flex-col  border-b py-4">
          <h5 class="mb-2">Preços</h5>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-[#1A1A1A]" for="minPrice">Min.</label>
            <input id="minPrice" type="number" v-model="minPrice"
              class="border border-[#E6E6E6] rounded-[8px] h-[21px] p-5" @blur="validatePrices" />
          </div>
          <div class="flex flex-col">
            <label for="maxPrice" class="text-sm text-[#1A1A1A]">Max.</label>
            <input id="maxPrice" type="number" class="border border-[#E6E6E6] rounded-[8px] h-[21px] p-5"
              v-model="maxPrice" @blur="validatePrices" />
          </div>
        </div>
      </div>
      <div class="flex flex-col w-[984px]">

        <HeaderFilterProduct :perPage="pagination.perPage" :totalProducts="products.length" />
        <div v-if="loading">Carregando...</div>
        <div class="flex flex-row flex-wrap gap-5" v-else>
          <div v-for="(item, index) in products" :key="index">
            <CardProductVertical :title="item.name" :price="item.price" :image="item.image" :id="item.id"
              :stock="item.stock" size="large" />
          </div>
        </div>
        <div class="flex flex-row justify-center items-center gap-4 mt-4">
          <Button :disabled="!pagination.previousPageUrl" @click="handlePageChange(pagination.currentPage - 1)"
            text="Anterior" />


          <span>Página {{ pagination.currentPage }} de
            {{ pagination.lastPage }}</span>

          <Button :disabled="!pagination.nextPageUrl" @click="handlePageChange(pagination.currentPage + 1)"
            text="Proximo" />

        </div>
      </div>
    </div>
  </div>
</template>
