<script setup lang="ts">

import Button from "~/components/atoms/Button/Button.vue";

import { store } from "~/store/store";
import { ref } from "vue";
const storeCart = store();
const selectedOption = ref("");
const paymentOption = ref("");

const { products, resetCart } =
  storeCart;

const { getCart, getToken, getTotal } = storeToRefs(storeCart);
const router = useRouter();


const handleSubmitOrder = async () => {
  try {
    const submitEvent = {
      payment: paymentOption.value,
      addressId: selectedOption.value,
      products,
    };

    const response = await fetch("http://localhost:3333/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${getToken.value}`,
      },
      body: JSON.stringify(submitEvent),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }


    router.push("/");

    resetCart();

  } catch (error) {
    console.error("Erro ao enviar o produto:", error);
  }
};

const response = await fetch("http://localhost:3333/api/address-by-user", {
  headers: {
    Authorization:
      `Bearer ${getToken.value}`,
  },
});

const data = await response.json();



</script>

<template>
  <div class="flex flex-col items-center h-full py-10">
    <div class="flex flex-row gap-6">
      <div class="w-[872px] flex flex-col">
        <h4 class="text-[#1A1A1A] font-bold text-xl">
          Informações de pagamento</h4>


        <h3>Escolha um endereço:</h3>
        <div class="flex flex-col w-full" v-for="location in data.address" :key="location.id">
          <div class="flex flex-col border border-[#E6E6E6] rounded-[6px] p-4 gap-4 mb-4">
            <div class="flex flex-row items-center w-full">
              <input type="radio" v-model="selectedOption" required :value="location.id" />

            </div>
            <div class="flex flex-row gap-2">
              <div class="flex flex-col w-full">
                <label for="cep" class="mb-2">Cep</label>
                <input id="cep" :value="location.zipCode" type="text" disabled
                  class="border border-[#E6E6E6] rounded-[8px] h-[21px] p-6" />
              </div>
              <div class="flex flex-col w-full">
                <label for="cep" class="mb-2">Numero</label>
                <input id="cep" :value="location.number" type="text" disabled
                  class="border border-[#E6E6E6] rounded-[8px] h-[21px] p-6" />
              </div>
              <div class="flex flex-col w-full">
                <label for="cep" class="mb-2">Rua</label>
                <input id="cep" :value="location.address" type="text" disabled
                  class="border border-[#E6E6E6] rounded-[8px] h-[21px] p-6" />
              </div>
            </div>

            <div class="flex flex-row gap-2">
              <div class="flex flex-col w-full">
                <label for="cep" class="mb-2">Cidade</label>
                <input id="cep" :value="location.city" type="text" disabled
                  class="border border-[#E6E6E6] rounded-[8px] h-[21px] p-6" />
              </div>
              <div class="flex flex-col w-full">
                <label for="cep" class="mb-2">UF</label>
                <input id="cep" :value="location.uf" type="text" disabled
                  class="border border-[#E6E6E6] rounded-[8px] h-[21px] p-6" />
              </div>

              <div class="flex flex-col w-full">
                <label for="cep" class="mb-2">Bairro</label>
                <input id="cep" :value="location.neighborhood" type="text" disabled
                  class="border border-[#E6E6E6] rounded-[8px] h-[21px] p-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col border border-[#E6E6E6] rounded-[6px] w-[424px] p-6">
        <h4 class="text-[#1A1A1A] font-bold text-xl">Resumo do pedido</h4>
        <div v-for="item in getCart" :key="item.id">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center">
              <img class="w-[60px] h-[60px]" :src="item.image" alt="img" />
              <h4 class="title">
                {{ item.title }}
              </h4>
            </div>
            <div class="flex flex-row items-center gap-2">

              <p>
                x{{ item.quantity }}
              </p>

              <p>
                {{
                  item.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between items-center py-3 border-b border-b-[#E6E6E6]">
          <h4 class="text-[#4D4D4D]">Subtotal:</h4>
          <h4 class="text-[#1A1A1A] font-bold text-sm">{{ getTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }) }}</h4>
        </div>
        <div class="flex flex-row justify-between items-center py-3 border-b border-b-[#E6E6E6]">
          <h4 class="text-[#4D4D4D]">Entrega:</h4>
          <h4 class="text-[#1A1A1A] font-bold text-sm">Gratis</h4>
        </div>
        <div class="flex flex-row justify-between items-center py-3 ">
          <h4 class="text-[#4D4D4D]">Total:</h4>
          <h4 class="text-[#1A1A1A] font-bold text-sm">{{ getTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }) }}</h4>
        </div>
        <div class="flex flex-col my-2 gap-1">
          <h3 class="text-[#1A1A1A] font-bold text-xl">Metodo do pagamento:</h3>

          <label>
            <input type="radio" value="CREDIT_CARD" v-model="paymentOption" />
            Cartão de credito
          </label>

          <label>
            <input type="radio" value="PIX" v-model="paymentOption" />
            PIX
          </label>


          <label>
            <input type="radio" value="DEBIT_CARD" v-model="paymentOption" />
            Cartão de debito
          </label>

          <label>
            <input type="radio" value="CASH" v-model="paymentOption" />
            Dinheiro
          </label>
        </div>
        <Button sizeType="medium" text="Fazer pedido" @click="handleSubmitOrder()" />
      </div>
    </div>
  </div>
</template>
