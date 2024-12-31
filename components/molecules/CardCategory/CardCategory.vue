<script setup lang="ts">

import fruitsImage from "~/assets/images/category-01.png"

const icons = {
  fruits: fruitsImage,
};

type Icon = keyof typeof icons;

const getIcon = (icon: Icon) => icons[icon];

const props = defineProps<{
  title?: string
  icon?: Icon
}>();

const title = props.title || "Fresh Fruit";
const icon = props.icon ? getIcon(props.icon) : getIcon("fruits");


</script>
<template>
  <div
    class="border border-[#E6E6E6] px-1 py-4 flex flex-col justify-center items-center rounded-md hover:border-[#2C742F] cursor-pointer ">
    <img :src="icon" alt="category" />
    <h5 class="text-[#1A1A1A] font-medium text-lg mt-4">{{ title }}</h5>
  </div>
</template>