<script setup lang="ts">
import { store } from "~/store/store";
import { useRoute, useRouter } from "vue-router";
import Button from "~/components/atoms/Button/Button.vue";

definePageMeta({
  layout: 'dashboard'
})

interface Pagination {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  page: number;
  nextPageUrl: string;
  previousPageUrl: string;
}


const storeCart = store();
const { getToken } = storeToRefs(storeCart);

const loading = ref(false);
const orders = ref<any[]>([]);

const route = useRoute();
const router = useRouter();

const pagination = ref<Pagination>({
  total: 0,
  perPage: 6,
  currentPage: parseInt(route.query.page as string) || 1,
  lastPage: 0,
  nextPageUrl: "",
  previousPageUrl: "",
  page: 0,
});

const fetchOrders = async () => {
  const page = route.query.page || 1;
  const limit = route.query.limit || 10;

  try {
    const { data, error } = await useFetch<any[]>('http://localhost:3333/order-by-user', {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${getToken.value}`,
      },
      query: {
        page,
        limit
      },
    });


    if (data.value) {
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


    orders.value = data.value.data || [];
    return { products: orders.value, error };
  } catch (error) {

  }
}


function translatedStatus(status) {
  // Tradução do status para português
  const translations = {
    PENDING: 'Pendente',
    ERROR: 'Erro',
    COMPLETE: 'Concluído',
  };
  return translations[status] || 'Desconhecido'; // Tradução padrão
}


const statusClass = (status) => {
  // Define as classes de cor com base no status
  const statusColors = {
    PENDING: 'text-yellow-500', // Cor para PENDING
    ERROR: 'text-red-500',     // Cor para ERROR
    COMPLETE: 'text-green-500', // Cor para COMPLETE
  };
  return statusColors[status] || 'text-gray-500'; // Cor padrão
}


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


watch(() => route.query, fetchOrders, { immediate: true });


</script>

<template>
  <div class="flex flex-row justify-center gap-8">
    <div class="flex flex-col border border-[#E6E6E6] rounded-[8px] w-[984px]">
      <div class="flex flex-row justify-between p-5">
        <h4 class="text-[#1A1A1A] font-bold text-xl">Histórico de pedidos</h4>
      </div>
      <div class="flex flex-row p-5 w-full bg-[#F2F2F2]">
        <h5 class="text-[#4D4D4D] text-sm font-medium uppercase w-[176px]">ID</h5>
        <h5 class="text-[#4D4D4D] text-sm font-medium uppercase w-[224px]">Data</h5>
        <h5 class="text-[#4D4D4D] text-sm font-medium uppercase w-[268px]">Total</h5>
        <h5 class="text-[#4D4D4D] text-sm font-medium uppercase w-[316px]">Status</h5>
      </div>
      <div v-if="loading">Carregando...</div>
      <div v-for="(item, index) in orders" :key="index" v-else>
        <div class="flex flex-row p-4 items-center ">
          <div class="text-[#808080] text-sm font-medium uppercase w-[176px]">
            <div class="flex flex-row items-center">
              <h4 class="text-[#1A1A1A] font-medium text-base capitalize">{{ item.id }}</h4>
            </div>
          </div>
          <div class="w-[224px]">
            <h4 class="text-[#1A1A1A] font-medium text-base">{{ new Date(item.createdAt).toLocaleString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            }) }}</h4>
          </div>
          <div class="text-[#808080] text-sm font-medium uppercase w-[268px]">
            <h4 class="text-[#1A1A1A] font-medium text-base">{{ item.totalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            }) }} ({{ item.orderProducts.length }} produtos)</h4>
          </div>
          <div class="w-[316px] flex flex-row justify-between ">
            <h4 :class="statusClass(item.status)" class="font-medium text-base">
              {{ translatedStatus(item.status) }}
            </h4>
            <NuxtLink :href="`/dashboard/detalhe-pedido/${item.id}`">
              <h4 class="font-medium text-base text-[#00B207] cursor-pointer">
                Ver detalhes
              </h4>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center items-center gap-4 mt-4">
        <Button :disabled="!pagination.previousPageUrl" @click="handlePageChange(pagination.currentPage - 1)"
          text="Anterior" />


        <span class="flex flex-row">Página {{ pagination.currentPage }} de
          {{ pagination.lastPage }}</span>

        <Button :disabled="!pagination.nextPageUrl" @click="handlePageChange(pagination.currentPage + 1)"
          text="Proximo" />

      </div>
    </div>
  </div>
</template>
