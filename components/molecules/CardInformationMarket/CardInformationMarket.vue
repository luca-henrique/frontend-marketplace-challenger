<script setup lang="ts">

import shippingIcon from "~/assets/icons/shipping-icon.svg";
import headphoneIcon from "~/assets/icons/headphone-icon.svg";
import packageIcon from "~/assets/icons/package-icon.svg";
import bagIcon from "~/assets/icons/bag-icon.svg";

const icons = {
  shipping: shippingIcon,
  headphone: headphoneIcon,
  shoppingBag: bagIcon,
  package: packageIcon,
};

type Icon = keyof typeof icons;

const getIcon = (icon: Icon) => icons[icon];

const props = defineProps<{
  title?: string
  description?: string
  icon?: Icon
}>();

const title = props.title || "Free Shipping";
const description = props.description || "Free Shipping";
const icon = props.icon ? getIcon(props.icon) : getIcon("shipping");
</script>

<template>
  <div class="flex flex-row items-center">
    <div class="mr-4">
      <img :src="icon" alt="shipping" class="h-12 w-12" />
    </div>
    <div>
      <h5 class="text-[#1A1A1A] font-semibold text-base">{{ title }}</h5>
      <h5 class="text-[#999999] font-normal text-sm">{{ description }}</h5>
    </div>
  </div>
</template>