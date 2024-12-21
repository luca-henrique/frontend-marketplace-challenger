<script setup lang="ts">
import { computed, defineProps } from "vue";
import shoppingBag from "~/assets/icons/shopping-bag-icon.svg"
import heart from "~/assets/icons/heart-icon.svg"
import eye from "~/assets/icons/eye-icon.svg"
import close from "~/assets/icons/close-icon.svg"

type ItemSize = "small" | "medium" | "large";
type ButtonType = "outlined" | "contained" | "containedSecondary" | "thierdContained" | 'outlinedSeconary';


const icons = {
  shoppingBag,
  heart, eye, close
} as const;

type IconKey = keyof typeof icons

function getIcon(name: IconKey) {
  return icons[name];
}

const buttonSize: Record<ItemSize, string> = {
  small: "p-2 text-xs",
  medium: "p-3 text-sm",
  large: "p-4 text-base",
};

const types: Record<ButtonType, string> = {
  outlinedSeconary:
    "border-2 border-[#ccc] hover:border-[#1A1A1A] text-[#EEF7ED] hover:text-[#1A1A1A]",
  outlined:
    "border-2 border-[#00B207] hover:border-[#2C742F] text-[#00B207] hover:text-[#2C742F]",
  contained: "bg-[#00B207] text-white hover:bg-[#2C742F]",
  containedSecondary:
    "bg-[#EEF7ED] text-[#00B207] hover:bg-[#D5E3D5] hover:text-[#2C742F]",
  thierdContained:
    "bg-[#fff] text-[#00B207] hover:bg-[#00B207] hover:text-[#fff] shadow-md",
};

function getButtonSize(size: ItemSize): string {
  return buttonSize[size];
}

function getType(type: ButtonType): string {
  return types[type];
}

// Definir valores padrão para as props
const props = defineProps<{
  sizeType?: ItemSize;
  buttonType?: ButtonType;
  icon?: IconKey;
  onClick?: () => void;
}>();

// Atribuindo valores padrão caso não sejam passados
const sizeType = props.sizeType || "medium";
const buttonType = props.buttonType || "contained";
const icon = getIcon(props.icon || "heart");

const buttonStyle = computed(() =>
  `${getButtonSize(sizeType)} ${getType(buttonType)} rounded-full transition duration-600 font-semibold`
);

</script>

<template>
  <button @click="props.onClick" class="icon-container">
    <img :src="icon" :alt="icon" :class="buttonStyle" />
  </button>
</template>

<style lang="css" scoped>
.icon-container {

  svg {
    stroke: #fff;
  }
}
</style>
