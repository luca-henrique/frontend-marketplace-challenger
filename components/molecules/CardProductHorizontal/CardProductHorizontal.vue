<script setup lang="ts">
import { ref } from "vue";
import FruitImg from "~/assets/images/image.png"
import StarRatings from "vue3-star-ratings"
import eye from "~/assets/icons/eye-icon.svg"
import shoppingBag from "~/assets/icons/shopping-bag-icon.svg"
import heart from "~/assets/icons/heart-icon.svg"

const isHovered = ref(false);

const props = defineProps<{
  title?: string;
  price?: number;
  rating?: number;
  addWhitelist?: () => void;
  addCart?: () => void;
  onChangeNavigation?: () => void;

}>();

// Atribuindo valores padrão caso não sejam passados
const title = props.title || "Chanise Cabbage";
const price = props.price || 10;
const rating = props.rating || 3.5;

</script>


<template>
  <div
    class="border-2 border-[#E6E6E6] hover:border-[#2C742F]  rounded-md flex flex-row w-[424px] items-center shadow hover:shadow-lg"
    @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <img :src="FruitImg" alt="fruit" class="pl-2 w-[100px] h-full" />
    <div class="flex flex-col px-3 py-6">
      <h5 :class="{
        'text-sm font-normal text-[#1A1A1A] capitalize': true,
        'text-[#2C742F]': isHovered
      }">
        {{ title }}
      </h5>
      <h5 :class="{ 'hidden': isHovered }">{{ price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }) }}</h5>
      <StarRatings :starSize="16" starColor="#FF8A00" inactiveColor="#CCCCCC" :numberOfStars="5" v-model="rating"
        :class="{ 'hidden': isHovered }" :disableClick="false" />
      <div :class="{ 'flex flex-row gap-2 mt-1': isHovered, 'hidden': !isHovered }">
        <button :onclick="addCart"><img :src="shoppingBag" alt="eye"
            class="rounded-full border border-[#F2F2F2] p-2 bg-[#00B207]" /></button>
        <button :onclick="onChangeNavigation"><img :src="eye" alt="eye"
            class="rounded-full border border-[#F2F2F2] p-2" /></button>
        <button :onclick="addWhitelist"><img :src="heart" alt="heart"
            class="rounded-full border border-[#F2F2F2] p-2" /></button>
      </div>
    </div>
  </div>
</template>
