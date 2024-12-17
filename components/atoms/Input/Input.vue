<script setup lang="ts">
import { ref, watch, withDefaults, defineProps, defineEmits } from "vue";

const props = withDefaults(defineProps<{
  label: string;
  type?: string;
  mask?: string;
  placeholder: string;
  modelValue: string; // Prop para o v-model
}>(), {
  label: "",
  type: "text",
  mask: "",
  placeholder: "",
});

const { type, label, placeholder, modelValue } = props;

// Define o evento para o v-model
const emit = defineEmits(["update:modelValue"]);

// Estado local do valor do input
const localValue = ref<string>(modelValue);

// Função para aplicar máscara, se necessário
const applyMask = () => {
  if (type !== "money") return; // Apenas aplica a máscara se o tipo for "money"

  const numericValue = localValue.value.replace(/[^\d]/g, ""); // Limpa caracteres não numéricos

  if (!numericValue) {
    localValue.value = "";
    emit("update:modelValue", ""); // Emite o valor atualizado
    return;
  }

  const numberValue = (parseInt(numericValue, 10) || 0) / 100;
  const formatted = numberValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  localValue.value = formatted;
  emit("update:modelValue", formatted); // Emite o valor atualizado
};

// Alterna visibilidade da senha
const isShowText = ref(true);
const isPassword = type === "password";
const isVisible = isShowText ? "text" : "password";
const toggleVisibility = () => {
  isShowText.value = !isShowText.value;
};

// Atualiza o valor local quando o v-model muda externamente
watch(() => modelValue, (newValue) => {
  localValue.value = newValue;
});

// Aplica máscara sempre que o valor interno muda
watch(localValue, (newValue) => {
  emit("update:modelValue", newValue);
  if (type === "money") applyMask();
});
</script>


<template>
  <div class="flex flex-col gap-2">
    <label :for="label" class="text">{{ label }}</label>
    <input
      v-bind="$attrs"
      :type="isVisible"
      :placeholder="placeholder"
      v-model="localValue"
      class="input"
      :id="label"
    />
    
  </div>
</template>

<style>
.flex {
  display: flex;
}

.gap-2{
  gap: .25rem;
}

.flex-col {
  flex-direction: column;
}

.bold {
  font-weight: bold;
}
.input {
  height: 32px;
  border: 1px solid #dedede;
  border-radius: 6px;
}
</style>
