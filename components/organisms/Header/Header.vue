<script setup lang="ts">
import { ref } from "vue";

const cartValue = ref(10);

</script>

<template>
  <header class="flex flex-row border-b-2 border-[#E5E5E5] p-4 items-center justify-around">
    <div class="flex flex-row items-center gap-1">
      <img src="~/assets/icons/market.svg" alt="Market Logo" class="h-9 w-9" />
      <div class="flex flex-col items-start">
        <h1 class="text-[#3BB77E] text-xl font-bold h-fits">BairristaMarket</h1>
        <p>Tudo do seu bairro</p>
      </div>
    </div>

    <form class="flex flex-row w-[497px] mx-4 h-[44px]">
      <input type="text" placeholder="Search"
        class="w-full bg-[#Fff] border-[1px] border-[#d5d5d5] h-[44px] p-3 rounded-s-md" />
      <img src="~/assets/icons/search-icon.svg" alt="Search Icon"
        class="w-[54px] h-[44px] bg-[#00B207] p-2 rounded-r-md" />
    </form>
    <div class="flex flex-row gap-10">
      <button class="flex flex-row  relative items-center mr-4">
        <img src="~/assets/icons/heart-icon.svg" alt="Cart Icon" class="h-8 w-8" />
        <p
          class="absolute -top-3 -right-2 flex items-center justify-center bg-green-500 font-light text-xs text-white p-1  rounded-full border-2 border-white">
          10</p>
      </button>

      <button class="flex flex-row  relative items-center mr-4 gap-4">
        <img src="~/assets/icons/shopping-bag-icon.svg" alt="Cart Icon" class="h-8 w-8" />
        <p
          class="absolute -top-2 left-5 flex items-center justify-center bg-green-500 font-light text-xs text-white p-1  rounded-full border-2 border-white">
          10</p>
        <div class="flex flex-col items-start ">
          <h1 class="text-[#4D4D4D] font-normal text-xs">My cart</h1>
          <p class="text-[#1A1A1A] font-normal text-medium">{{ cartValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }) }}</p>
        </div>
      </button>
    </div>
  </header>
</template>