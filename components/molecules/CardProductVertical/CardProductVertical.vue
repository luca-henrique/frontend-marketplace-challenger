<script setup lang="ts">
import { ref } from "vue";
import FruitImg from "~/assets/images/image.png"
import StarRatings from "vue3-star-ratings"
import IconButton from "~/components/atoms/IconButton/IconButton.vue";
import Brand from "~/components/atoms/Brand/Brand.vue";
import PriceText from "../PriceText/PriceText.vue";

const isHovered = ref(false);

const cardSize = {
  small: "w-[248px]",
  medium: "w-[264px]",
  large: "w-[312px]",
}

type PromotionTypeProps = 'sale' | 'new' | 'bestSale' | 'outStock'

type ItemSize = keyof typeof cardSize

type Brand = typeof cardSize[ItemSize];


function getCardSize(key: ItemSize): Brand {
  return cardSize[key];
}

const props = defineProps<{
  title?: string;
  price?: number;
  rating?: number;
  addWhitelist?: () => void;
  addCart?: () => void;
  onChangeNavigation?: () => void;
  promotionType?: PromotionTypeProps;
  size?: ItemSize
}>();

// Atribuindo valores padrão caso não sejam passados
const title = props.title || "Chanise Cabbage";
const price = props.price || 10;
const rating = props.rating || 3.5;
const size = props.size ? getCardSize(props.size) : getCardSize('small')

</script>


<template>
  <div
    class=" flex flex-col border-2 border-[#E6E6E6] hover:border-[#2C742F] relative shadow-md rounded-lg h-full cursor-pointer"
    :class="size" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <img :class="size" :src="FruitImg" alt="fruit" class="h-full object-contain mt-1" />
    <div class="flex flex-row justify-between  p-4">
      <div class="flex flex-col gap-1">
        <h5 :class="{
          'text-sm font-normal text-[#1A1A1A] capitalize': true,
          'text-[#2C742F]': isHovered
        }">
          {{ title }}
        </h5>
        <PriceText :price="price" :promotion="5" />
        <StarRatings :starSize="16" starColor="#FF8A00" inactiveColor="#CCCCCC" :numberOfStars="5" v-model="rating"
          :disableClick="false" />
      </div>

      <IconButton icon="shoppingBag" buttonType="thierdContained" />


      <div :class="{ 'flex flex-col gap-2 mt-1 absolute top-1 right-4': isHovered, 'hidden': !isHovered }">
        <IconButton icon="eye" buttonType="outlinedSeconary" />
        <IconButton icon="heart" buttonType="outlinedSeconary" />
      </div>

      <div v-if="promotionType" class="absolute top-4 left-4">
        <Brand :brandType="promotionType" />
      </div>

    </div>
  </div>
</template>
