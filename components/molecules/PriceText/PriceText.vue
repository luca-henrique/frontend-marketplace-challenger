<script setup lang="ts">

const props = defineProps<{
  price: number;
  promotion?: number;
  size?: ItemSize;
}>();

type ItemSize = "small" | "medium" | "large";

const sizes: Record<ItemSize, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-2xl",
};

function getButtonSize(sizeOption: ItemSize): string {
  return sizes[sizeOption];
}



const formatMoney = (value: number) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

const { promotion, price = 0, size = 'small' } = props

console.log(size)


const sizeStyle = computed(() =>
  `${getButtonSize(size)}`
);

</script>

<template>
  <div class="flex flex-row items-center gap-2  ">
    <h4 v-if="promotion" :class="[
      'font-medium text-[#1A1A1A]',
      sizeStyle
    ]">{{ formatMoney(promotion) }}</h4>
    <h4 :class="[
      'font-medium',
      sizeStyle,
      { 'line-through text-[#999999]': promotion, 'text-[#1A1A1A]': !promotion }
    ]">
      {{ formatMoney(price) }}
    </h4>
  </div>
</template>
