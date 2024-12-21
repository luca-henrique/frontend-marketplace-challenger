<script setup lang="ts">
import "@/assets/css/tailwind.css";

import Button from "~/components/atoms/Button/Button.vue";
import CardProductHorizontal from "~/components/molecules/CardProductHorizontal/CardProductHorizontal.vue";
import IconButton from "~/components/atoms/IconButton/IconButton.vue";

const handleClick = () => {
  console.log('handle')
}

</script>


<template>
  <div class="flex flex-col items-center justify-center h-screen bg-white gap-8">
    <CardProductHorizontal :addCart="handleClick" :addWhitelist="handleClick" :onChangeNavigation="handleClick" />
    <Button text="Aqui" />
    <IconButton buttonType="containedSecondary" />
    <IconButton buttonType="contained" />
    <IconButton buttonType="outlined" />
    <IconButton buttonType="thierdContained" />
    <IconButton buttonType="outlinedSeconary" />
  </div>
</template>
