<script setup lang="ts">
import HeaderLogo from "~/components/molecules/HeaderLogo/HeaderLogo.vue";
import InputSearchProduct from '~/components/molecules/InputSearchProduct/InputSearchProduct.vue';
import HeaderIconsGroup from "~/components/molecules/HeaderIconsGroup/HeaderIconsGroup.vue";
</script>

<template>
  <header class="flex flex-row border-b-2 border-[#E5E5E5] p-4 items-center justify-around md:w-full">
    <HeaderLogo />
    <InputSearchProduct />
    <HeaderIconsGroup />
  </header>
</template>