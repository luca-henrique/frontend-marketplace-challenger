<script setup lang="ts">
import { ref } from "vue";
import StarRatings from "vue3-star-ratings"
import IconButton from "~/components/atoms/IconButton/IconButton.vue";
import Brand from "~/components/atoms/Brand/Brand.vue";
import PriceText from "../PriceText/PriceText.vue";
import { store } from "~/store/store";

const isHovered = ref(false);

const cardSize = {
  small: "w-[248px]",
  medium: "w-[264px]",
  large: "w-[312px]",
}

const imageSize = {
  small: "w-[246px] h-[246px]",
  medium: "w-[254px] h-[230px]",
  large: "w-[302px] h-[302px]",
}

type PromotionTypeProps = 'sale' | 'new' | 'bestSale' | 'outStock'

type ItemSize = keyof typeof cardSize

type Brand = typeof cardSize[ItemSize];

const storeAction = store()

const { addProductWhiteList, addProductCart } =
  storeAction;

function getCardSize(key: ItemSize): Brand {
  return cardSize[key];
}

function getCardImageSize(key: ItemSize): Brand {
  return cardSize[key];
}

const props = defineProps<{
  title?: string;
  price?: number;
  rating?: number;
  promotion?: number;
  addWhitelist?: () => void;
  addCart?: () => void;
  onChangeNavigation?: () => void;
  promotionType?: PromotionTypeProps;
  size?: ItemSize
  id: number
  image: string;
  stock: number;
}>();

// Atribuindo valores padrão caso não sejam passados
const id = props.id
const title = props.title || "Chanise Cabbage";
const price = props.price || 10;
const rating = props.rating || 3.5;
const size = props.size ? getCardSize(props.size) : getCardSize('small')
const imageSizeType = props.size ? getCardImageSize(props.size) : getCardImageSize('small')
const promotion = props.promotion
const image = props.image
const stock = props.stock

const product = {
  id,
  title,
  price,
  rating,
  promotion,
  image,
  stock
}
</script>


<template>
  <div
    class=" flex flex-col border-2 border-[#E6E6E6] hover:border-[#2C742F] relative shadow-md rounded-lg h-full cursor-pointer"
    :class="size" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <nuxt-img :class="imageSizeType" :src="props.image" alt="fruit" class="h-full object-contain mt-1" lazy />
    <div class="flex flex-row justify-between  p-4">
      <div class="flex flex-col gap-1">
        <h5 :class="{
          'text-sm font-normal text-[#1A1A1A] capitalize': true,
          'text-[#2C742F]': isHovered
        }">
          {{ title }}
        </h5>
        <PriceText :price="price" :promotion="promotion" />
        <StarRatings :starSize="16" starColor="#FF8A00" inactiveColor="#CCCCCC" :numberOfStars="5" v-model="rating"
          :disableClick="false" />
      </div>

      <IconButton icon="shoppingBag" buttonType="thierdContained" :onClick="() => addProductCart(product)" />


      <div :class="{ 'flex flex-col gap-2 mt-1 absolute top-1 right-4': isHovered, 'hidden': !isHovered }">
        <IconButton icon="eye" buttonType="outlinedSeconary" />
        <IconButton icon="heart" buttonType="outlinedSeconary" :onClick="() => addProductWhiteList(product)" />
      </div>

      <div v-if="promotionType" class="absolute top-4 left-4">
        <Brand :brandType="promotionType" />
      </div>

    </div>
  </div>
</template>
