<script setup lang="ts">
import { store } from "~/store/store";
const storeCart = store();
const { getToken } = storeToRefs(storeCart);
import OrderDetailProgress from "~/components/molecules/OrderDetailProgress/OrderDetailProgress.vue"

definePageMeta({
  layout: 'dashboard'
})

import { useRoute } from "vue-router";

type Address = {
  id: number;
  zipCode: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
  userId: number;
  marketId: number | null;
  createdAt: string;
  updatedAt: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  image: string;
  marketId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
};

type OrderProduct = {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  product: Product;
};

type Order = {
  id: number;
  userId: number;
  addressId: number;
  totalQuantity: number;
  totalPrice: number;
  payment: "CASH" | "CREDIT_CARD" | "PIX"; // Ajuste os métodos de pagamento conforme necessário
  status: "PENDING" | "COMPLETED" | "CANCELLED"; // Ajuste os status conforme necessário
  createdAt: string;
  updatedAt: string;
  address: Address;
  orderProducts: OrderProduct[];
};

const route = useRoute();


const loading = ref(false);
const order = ref<Order>({
  id: 0,
  userId: 0,
  addressId: 0,
  totalQuantity: 0,
  totalPrice: 0,
  payment: "CASH",
  status: "PENDING",
  createdAt: "",
  updatedAt: "",
  address: {
    id: 0,
    zipCode: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    uf: "",
    userId: 0,
    marketId: null,
    createdAt: "",
    updatedAt: ""
  },
  orderProducts: []
});



const fetchOrders = async () => {
  try {
    const { data, error } = await useFetch(`http://localhost:3333/order/${route.params.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${getToken.value}`,
      },

    });


    order.value = data.value;
    return { products: order.value, error };
  } catch (error) {

  }
}


watch(() => route.params.id, fetchOrders, { immediate: true });


</script>

<template>
  <div v-if="loading">Carregando...</div>
  <div class="flex flex-col border border-[#E6E6E6] rounded-[8px] w-[984px]" v-else>
    {{ console.log(order) }}
    <div class="flex flex-row border-b border-[#E6E6E6] py-4 px-6  justify-between">
      <div class="flex flex-row  gap-3 items-center">
        <h4 class="text-[#1A1A1A] font-semibold text-xl">Detalhe do pedido</h4>
        <h4 class="text-[#4D4D4D] font-normal text-sm before:content-['•']">{{ new
          Date(order.createdAt).toLocaleString('pt-BR', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }) }}</h4>
        <h4 class="text-[#4D4D4D] font-normal text-sm before:content-['•']">{{ order.totalQuantity }} Produtos</h4>
      </div>
      <div>
        <NuxtLink href="/dashboard/historico-pedidos" class="flex flex-row items-center gap-2">
          <h5 class="text-[#00B207] font-medium text-base">Voltar para a lista</h5>
        </NuxtLink>
      </div>
    </div>

    <div class="py-4 px-6 flex flex-row gap-6">
      <div class="w-[424px] flex flex-col justify-start items-start border rounded-lg p-8 gap-2">
        <h4 class="text-sm font-medium text-[#999999] uppercase ">Endereço para entrega</h4>
        <h5 class="text-sm font-medium text-[#666666] ">{{ order.address.address }}</h5>
        <h5 class="text-sm font-medium text-[#666666] ">N {{ order.address.number }}, {{ order.address.neighborhood }},
          {{ order.address.city }}</h5>
        <h5 class="text-sm font-medium text-[#666666] ">{{ order.address.complement }}</h5>
      </div>
      <div class="w-[424px] flex flex-col justify-start items-start border rounded-lg p-8 gap-2">
        <h4 class="text-sm font-medium text-[#999999] uppercase ">Detalhes da compra</h4>
        <h5 class="text-sm font-medium text-[#666666] ">{{ order.payment }}</h5>
        <h5 class="text-sm font-medium text-[#666666] "> {{ order.totalPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }) }}</h5>
        <h5 class="text-sm font-medium text-[#666666] ">{{ order.id }}</h5>
      </div>

    </div>
    <OrderDetailProgress />

  </div>
</template>
