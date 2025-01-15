<script setup lang="ts">
import IconButton from "~/components/atoms/IconButton/IconButton.vue";
import Button from "~/components/atoms/Button/Button.vue";
import { store } from "~/store/store";

const storeCart = store();

const { getWhiteList } = storeToRefs(storeCart);

const { removeProductWhiteList, parseProductWhiteListToCart } = storeCart

</script>

<template>
  <div class="flex flex-col items-center h-full">
    <h1 class="text-[#1A1A1A] font-extrabold text-4xl my-7">Whitelist</h1>
    <div class="flex flex-col gap-4 mb-14 w-[1320px]">
      <div class="flex flex-col border border-[#E6E6E6] rounded-[8px]">
        <div class="flex flex-row p-5 w-full ">
          <h5 class="text-[#808080] text-sm font-medium uppercase w-[460px]">Produto</h5>
          <h5 class="text-[#808080] text-sm font-medium uppercase w-[336px]">Preço</h5>
          <h5 class="text-[#808080] text-sm font-medium uppercase w-[200px]">Stock</h5>
        </div>
        <div v-for="(item, index) in getWhiteList" :key="index">
          {{ console.log(item) }}
          <div class="flex flex-row p-4 items-center border-t border-[#E6E6E6]">
            <div class="text-[#808080] text-sm font-medium uppercase w-[460px]">
              <div class="flex flex-row items-center">
                <img :src="item.image" class="w-[100px] h-[100px]" :alt="item.title" />
                <h4 class="text-[#1A1A1A] font-medium text-base capitalize">{{ item.title }}</h4>
              </div>
            </div>
            <div class="w-[336px]">
              <h4 class="text-[#1A1A1A] font-medium text-base">{{ (item.price).toLocaleString("pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                }) }}</h4>
            </div>
            <div class="text-[#808080] text-sm font-medium uppercase w-[136px]">
              <h4 class="text-[#1A1A1A] font-medium text-base">{{ item.stock }}</h4>
            </div>

            <div class="text-[#808080] text-sm font-medium uppercase w-[323px]">
              <div class="flex flex-row justify-end items-center gap-2">
                <Button text="Adicionar no carrinho" sizeType="medium"
                  :onClick="() => parseProductWhiteListToCart(item)" />
                <IconButton buttonType="containedSecondary" icon="close"
                  :onClick="() => removeProductWhiteList(item.id)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
