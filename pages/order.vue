<script setup lang="ts">
import IconButton from "~/components/atoms/IconButton/IconButton.vue";
import Button from "~/components/atoms/Button/Button.vue";
import { store } from "~/store/store";

const storeCart = store();

const { getCart, getTotalCartPrice } = storeToRefs(storeCart);

const { incrementProductCart, removeProductCart, decrementProductCart } = storeCart

</script>

<template>
  <div class="flex flex-col items-center h-full">
    <h1 class="text-[#1A1A1A] font-extrabold">My Shopping Cart</h1>
    <div class="flex flex-row gap-4 my-14">
      <div class="w-[872px] flex flex-col border border-[#E6E6E6] rounded-[8px] ">
        <div class="flex flex-row p-4">
          <h5 class="text-[#808080] text-sm font-medium uppercase w-[383px]">Produto</h5>
          <h5 class="text-[#808080] text-sm font-medium uppercase w-[114px]">Preço</h5>
          <h5 class="text-[#808080] text-sm font-medium uppercase w-[186px]">Quantidade</h5>
          <h5 class="text-[#808080] text-sm font-medium uppercase w-[173px]">Subtotla</h5>
        </div>
        <div v-for="(item, index) in getCart" :key="index">
          <div class="flex flex-row p-4 justify-center items-center border-t border-[#E6E6E6]">
            <div class="text-[#808080] text-sm font-medium uppercase w-[383px]">
              <div class="flex flex-row items-center w-[374px]">
                <img :src="item.image" class="w-[100px] h-[100px]" :alt="item.title" />
                <h4 class="text-[#1A1A1A] font-medium text-base capitalize">{{ item.title }}</h4>
              </div>
            </div>
            <div class="text-[#808080] text-sm font-medium uppercase w-[114px]">
              <h4 class="text-[#1A1A1A] font-medium text-base">{{ item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              }) }}</h4>
            </div>
            <div class="text-[#808080] text-sm font-medium uppercase w-[186px] ">
              <div
                class="flex flex-row border border-[#E6E6E6] rounded-full w-[124px] p-2 justify-between items-center">
                <IconButton buttonType="containedSecondary" icon="minus"
                  :onClick="() => decrementProductCart(item.id)" />
                <h4 class="text-[#1A1A1A] font-medium text-base">{{ item.quantity }}</h4>
                <IconButton buttonType="containedSecondary" icon="plus"
                  :onClick="() => incrementProductCart(item.id)" />
              </div>
            </div>
            <div class="text-[#808080] text-sm font-medium uppercase w-[173px]">
              <div class="flex flex-row justify-between items-center">
                <h4 class="text-[#1A1A1A] font-medium text-base">{{ (item.price * item.quantity).toLocaleString("pt-BR",
                  {
                    style: "currency",
                    currency: "BRL",
                  }) }}</h4>
                <IconButton buttonType="containedSecondary" icon="close" :onClick="() => removeProductCart(item.id)" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="flex flex-col border border-[#E6E6E6] rounded-[8px] p-6 w-[424px] h-[296px]">
        <h4 class="text-[#1A1A1A] font-bold text-xl">Total</h4>
        <div class="flex flex-row justify-between items-center py-3 border-b border-b-[#E6E6E6]">
          <h4 class="text-[#4D4D4D]">Subtotal:</h4>
          <h4 class="text-[#1A1A1A] font-bold text-sm">{{ getTotalCartPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }) }}</h4>
        </div>
        <div class="flex flex-row justify-between items-center py-3 border-b border-b-[#E6E6E6]">
          <h4 class="text-[#4D4D4D]">Entrega:</h4>
          <h4 class="text-[#1A1A1A] font-bold text-sm">Gratis</h4>
        </div>
        <div class="flex flex-row justify-between items-center py-3 py-3  mb-3">
          <h4 class="text-[#4D4D4D]">Total:</h4>
          <h4 class="text-[#1A1A1A] font-bold text-sm">{{ getTotalCartPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }) }}</h4>
        </div>
        <Button sizeType="medium" text="Finalizar compra" />
      </div>
    </div>
  </div>
</template>
