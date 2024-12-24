<script setup lang="ts">
const brands = {
  sale: {
    name: "50%",
    color: "#EA4B48"
  },
  new: {
    name: "Novo",
    color: "#FF8A00"
  },
  bestSale: {
    name: "Mais Vendidos",
    color: "#2388FF"
  },
  outStock: {
    name: "Fora de Estoque",
    color: "#1A1A1A"
  }
}

type BrandKey = keyof typeof brands;

type Brand = typeof brands[BrandKey];


function getBrandDetails(key: BrandKey): Brand {
  return brands[key];
}

const props = defineProps<{
  brandType?: BrandKey;
}>();

const brandType = props.brandType || "sale";

const { name, color } = getBrandDetails(brandType)


</script>

<template>
  <div :style="{ backgroundColor: color }" class="px-2 py-1 shadow-md rounded-md text-white">{{ name }}</div>
</template>
