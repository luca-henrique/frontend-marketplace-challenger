<script setup lang="ts">

import HeaderLogo from "~/components/molecules/HeaderLogo/HeaderLogo.vue";

import { store } from "~/store/store";

const storeCart = store();

const { getTotalWhiteList, getTotalCart, getTotalCartPrice } = storeToRefs(storeCart);


</script>

<template>
  <header class="flex flex-row border-b-2 border-[#E5E5E5] p-4 items-center justify-around">
    <HeaderLogo />

    <form class="flex flex-row w-[497px] mx-4 h-[44px]">
      <input type="text" placeholder="Search"
        class="w-full bg-[#Fff] border-[1px] border-[#d5d5d5] h-[44px] p-3 rounded-s-md" />
      <img src="~/assets/icons/search-icon.svg" alt="Search Icon"
        class="w-[54px] h-[44px] bg-[#00B207] p-2 rounded-r-md" />
    </form>
    <div class="flex flex-row gap-4">
      <button class="flex flex-row  relative items-center ">
        <img src="~/assets/icons/heart-icon.svg" alt="Cart Icon" class="h-8 w-8" />
        <p
          class="absolute -top-1 w-6 h-6 -right-2 flex items-center justify-center bg-green-500 font-light text-xs text-white rounded-full border-2 border-white">
          {{ getTotalWhiteList }}</p>
      </button>

      <button class="flex flex-row  relative items-center gap-4">
        <img src="~/assets/icons/bag-outlined-icon.svg" alt="Cart Icon" class="h-8 w-8" />
        <p
          class="absolute -top-1 left-5 w-6 h-6  flex items-center justify-center bg-green-500 font-light text-xs text-white  rounded-full border-2 border-white">
          {{ getTotalCart }}</p>
        <div class="flex flex-col items-start ">
          <h1 class="text-[#4D4D4D] font-normal text-xs">My cart</h1>
          <p class="text-[#1A1A1A] font-normal text-medium">{{ getTotalCartPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }) }}</p>
        </div>
      </button>
    </div>
  </header>
</template>