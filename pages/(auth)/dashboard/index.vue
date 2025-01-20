<script setup lang="ts">

import { store } from "~/store/store";

const storeCart = store();
const { getToken } = storeToRefs(storeCart);

const loading = ref(false);
const orders = ref<any[]>([]);

const fetchOrders = async () => {
  loading.value = true;


  try {
    const { data, error } = await useFetch<any[]>('http://localhost:3333/order-by-user', {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer oat_MTA.ektVNTZWZnVpeHluZUE5bTBkbTh0eXdvdmJPRmtfU2lDVEFlZDZkRDE0MjA5OTUwNjE`,
      },
    });
    orders.value = data.value.data || [];
    return { products: orders.value, error };
  } catch (error) {

  } finally {
    loading.value = false;
  }
}


watch(() => null, fetchOrders, { immediate: true });

const formatador = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

</script>

<template>
  <div class="flex flex-col p-8">
    <div class="flex flex-row justify-center gap-8">
      <div class="flex flex-col w-[312px] border boder-[#E6E6E6] rounded-lg">
        <h4>Navegação</h4>
        <ul>
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Histórico de pedidos</a>
          </li>
          <li>
            <a>Whitelist</a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col border border-[#E6E6E6] rounded-[8px]">
        <div class="flex flex-row justify-between p-5">
          <h4 class="text-[#1A1A1A] font-bold text-xl">Histórico de pedidos recebidos</h4>
          <NuxtLink href="/" class="flex flex-row items-center gap-2">
            <h5 class="text-[#00B207] font-medium text-lg">Ver tudo</h5>
          </NuxtLink>
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
              }) }}</h4>
            </div>
            <div class="w-[316px]">
              <h4 class="text-[#1A1A1A] font-medium text-base">{{ item.status }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
