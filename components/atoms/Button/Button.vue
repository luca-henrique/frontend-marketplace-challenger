<script setup lang="ts">
import { computed, defineProps } from "vue";

type ItemSize = "small" | "medium" | "large";
type ButtonType = "outlined" | "contained" | "containedSecondary";

const buttonSize: Record<ItemSize, string> = {
  small: "px-6 py-3 text-xs",
  medium: "px-8 py-3.5 text-sm",
  large: "px-10 py-4 text-base",
};

const types: Record<ButtonType, string> = {
  outlined:
    "!border-2 !border-[#00B207] hover:border-[#2C742F] text-[#00B207] hover:text-[#2C742F]",
  contained: "bg-[#00B207] text-white hover:bg-[#2C742F]",
  containedSecondary:
    "bg-[#EEF7ED] text-[#00B207] hover:bg-[#D5E3D5] hover:text-[#2C742F]",
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
  text?: string;
  onClick?: () => void;
}>();

// Atribuindo valores padrão caso não sejam passados
const sizeType = props.sizeType || "large";
const buttonType = props.buttonType || "contained";
const text = props.text || "Default Text";

const buttonStyle = computed(() =>
  `${getButtonSize(sizeType)} ${getType(buttonType)} rounded-full transition duration-300 font-semibold`
);

</script>

<template>
  <button :class="buttonStyle" @click="props.onClick">
    {{ text }}
  </button>
</template>
