<script setup lang="ts">
import Header from '~/components/molecules/Header/Header.vue';
import { store } from '~/store/store';
import { ref, watchEffect } from 'vue';

interface Order {
  id: number;
  totalQuantity: number
  totalPrice: number
  status: SVGStringList
}

const { getToken } = store()
const data = ref<Order[]>([])
const loading = ref(true)


watchEffect(async () => {
  try {
    loading.value = true; // Ativa o estado de carregamento
    const response = await fetch("http://localhost:3333/order-by-user?limit=5", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar os dados da API");
    }

    const result = await response.json(); // Realiza o parsing da resposta JSON
    data.value = result.data; // Atualiza o `data` com os dados obtidos da API
  } catch (error) {
    console.error("Erro na requisição:", error);
  } finally {
    loading.value = false; // Finaliza o estado de carregamento
  }
})

</script>

<template>
  <div class="flex flex-col items-center">
    <Header />

    <div v-if="loading" class="loading">
      Carregando...
    </div>

    <div class="content" v-else>
      <div v-if="data.length >= 1" v-for="item in data" :key="item.id"
        class="flex flex-col gap-4 items-center justify-center">
        <div v-if="item.totalPrice" class="flex flex-row gap-8 card">
          <div class="flex flex-col ">
            <h5 class="mb-4">Numero da compra</h5>
            <h5>{{ item.id }}</h5>
          </div>
          <div class="flex flex-col">
            <h5 class="mb-4">Quantidade de items</h5>
            <h5>{{ item.totalQuantity }}</h5>
          </div>
          <div class="flex flex-col">
            <h5 class="mb-4">Preço tottal</h5>
            <h5>{{ item.totalPrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            }) }}</h5>
          </div>
          <div class="flex flex-col">
            <h5 class="mb-4">status</h5>
            <h5>{{ item.status }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h5 {
  font-weight: 400;
  font-size: 14px;
}

.content {
  margin-top: 40px;
  width: 80%;
}


.card {
  border: 1px solid gray;
  margin-top: 10px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.mb-4 {
  margin-bottom: 4px;
}

.justify-center {
  justify-content: center;
}
</style>
