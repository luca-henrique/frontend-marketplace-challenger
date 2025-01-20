<script setup lang="ts">
import "@/assets/css/tailwind.css";

import Button from "~/components/atoms/Button/Button.vue";
import CardProductHorizontal from "~/components/molecules/CardProductHorizontal/CardProductHorizontal.vue";
import IconButton from "~/components/atoms/IconButton/IconButton.vue";
import PriceText from "~/components/molecules/PriceText/PriceText.vue";
import Brand from "~/components/atoms/Brand/Brand.vue";
import CardProductVertical from "~/components/molecules/CardProductVertical/CardProductVertical.vue";

import CardProductVerticalPromotion from "~/components/molecules/CardProductVerticalPromotion/CardProductVerticalPromotion.vue";

const handleClick = () => {
  console.log('handle')
}

</script>


<template>
  <div class="flex flex-col items-center justify-center h-full bg-white gap-8 py-6">
    <CardProductHorizontal :addCart="handleClick" :addWhitelist="handleClick" :onChangeNavigation="handleClick" />
    <Button text="Aqui" />
    <div class="flex flex-row gap-2">
      <IconButton buttonType="containedSecondary" />
      <IconButton buttonType="contained" />
      <IconButton buttonType="outlined" />
      <IconButton buttonType="thierdContained" />
      <IconButton buttonType="outlinedSeconary" />
    </div>
    <div class="flex flex-row gap-2">
      <PriceText :price="10" :promotion="4" />
      <PriceText :price="10" :promotion="4" size="large" />
      <PriceText :price="10" size="medium" />
    </div>
    <div class="flex flex-row gap-2">
      <Brand brandType="new" />
      <Brand brandType="sale" />
      <Brand brandType="bestSale" />
      <Brand brandType="outStock" />
    </div>
    <div class="flex flex-row gap-4">
      <CardProductVertical size="small" promotionType="new" />
      <CardProductVertical size="medium" promotionType="bestSale" />
      <CardProductVertical size="large" />
    </div>
    <div class="flex flex-col gap-4">
      <CardProductVerticalPromotion promotionType="new" />
      <CardProductVerticalPromotion promotionType="bestSale" />
      <CardProductVerticalPromotion />
    </div>
  </div>
</template>
