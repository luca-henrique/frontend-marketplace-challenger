<script setup lang="ts">
import { ref } from "vue";
import FruitImg from "~/assets/images/image.png"
import StarRatings from "vue3-star-ratings"
import IconButton from "~/components/atoms/IconButton/IconButton.vue";
import Brand from "~/components/atoms/Brand/Brand.vue";
import PriceText from "../PriceText/PriceText.vue";
import PromotionTime from "../PromotionTime/PromotionTime.vue";
import Button from "~/components/atoms/Button/Button.vue";


const isHovered = ref(false);

const cardSize = {
  small: "w-[528px]",
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
  <div class=" flex flex-col border-2 border-[#E6E6E6] hover:border-[#2C742F] relative shadow-md h-full"
    @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <img :class="size" :src="FruitImg" alt="fruit" class="h-[416px] object-contain mt-1" />

    <div class="flex flex-row w-full gap-2 px-4">
      <IconButton icon="heart" buttonType="thierdContained" sizeType="large" />
      <Button class="w-full" text="Comprar" sizeType='medium' buttonType="thierdContained" />
      <IconButton icon="eye" buttonType="thierdContained" sizeType="large" />
    </div>

    <div class="flex flex-col gap-2 p-4 items-center justify-center">
      <h5 :class="{
        'text-lg font-normal text-[#1A1A1A] capitalize': true,
        'text-[#2C742F]': isHovered
      }">
        {{ title }}
      </h5>
      <PriceText :price="price" :promotion="5" size="large" />
      <div class="flex flex-row gap-2 items-center">
        <StarRatings :starSize="18" starColor="#FF8A00" inactiveColor="#CCCCCC" :numberOfStars="5" v-model="rating"
          :disableClick="false" />
        <h5 class="text-[#808080] text-xs font-normal"> (524 Feedback) </h5>
      </div>
      <h5 class="text-[#808080] text-xs font-normal">Se apresse! A oferta termina em:</h5>

      <PromotionTime />
    </div>

    <div :class="{ 'flex flex-col gap-2 mt-1 absolute top-1 right-4': isHovered, 'hidden': !isHovered }">
      <IconButton icon="eye" buttonType="outlinedSeconary" />
      <IconButton icon="heart" buttonType="outlinedSeconary" />
    </div>

    <div class="absolute top-4 left-4">
      <Brand :brandType="promotionType" />
    </div>


  </div>
</template>
