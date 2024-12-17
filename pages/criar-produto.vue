<script setup lang="ts">
import { ref } from "vue";
import ImageProduct from "~/components/molecules/ImageProduct/ImageProduct.vue";
import Button from "~/components/atoms/Button/Button.vue";

const form = ref({
  media: null as File | null,
  name: "",
  price: "",
  description: "",
  category: "",
});

const handleClick = (file: any) => {
  form.value.media = file;
  console.log(form.value);
};

const handleSubmit = async (event: Event) => {
  event.preventDefault();

  const formData = new FormData();
  
  //@ts-expect-error: Type com erro
  formData.append("media", form.value.media);
  formData.append("name", form.value.name);
  formData.append("price", form.value.price);
  formData.append("description", form.value.description);
  formData.append("category", form.value.category);

  try {
    const response = await fetch("https://api.exemplo.com/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Produto enviado com sucesso:", data);
  } catch (error) {
    console.error("Erro ao enviar o produto:", error);
  }
};
</script>

<template>
  <div class="container">
    <form @submit="handleSubmit">
      <ImageProduct :onChangeFile="handleClick" />
      <div class="flex flex-col gap-2">
        <label for="name" class="text">Nome do produto</label>
        <input
          placeholder="placeholder"
          v-model="form.name"
          class="input"
          id="name"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="name" class="text">Nome do preço</label>
        <input
          placeholder="placeholder"
          v-model="form.price"
          class="input"
          id="name"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="name" class="text">Nome do descrição</label>
        <input
          placeholder="placeholder"
          v-model="form.description"
          class="input"
          id="name"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="name" class="text">Nome do categoria</label>
        <input
          placeholder="placeholder"
          v-model="form.category"
          class="input"
          id="name"
        />
      </div>
      <Button type="submit">Criar</Button>
    </form>
  </div>
</template>

<style scoped>
.container {
  padding: 24px;
  width: 400px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
}
</style>
