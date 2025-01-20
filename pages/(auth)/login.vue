<script setup lang="ts">
import { ref } from 'vue';
import { store } from "~/store/store"

import Button from '~/components/atoms/Button/Button.vue';

const form = ref({
  email: "",
  password: ""
})

const { addToken } = store()

const router = useRouter();

const handleSubmit = async (event: Event) => {

  try {
    event.preventDefault();

    const response = await fetch("http://localhost:3333/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: form.value.email, password: form.value.password }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();
    addToken(data.token)
    router.push('/')
  } catch (error) {
    console.error("Erro ao enviar o produto:", error);
  }
};

</script>

<template>
  <div class="flex flex-col justify-center items-center bg-[#ededed]">
    <form @submit="handleSubmit" class="w-[520px] my-32 bg-white flex flex-col p-6 rounded-lg shadow-md">
      <div class="flex justify-center items-center ">
        <h1 class="font-semibold text-3xl">Entrar</h1>
      </div>
      <div class="flex flex-col w-full">
        <label for="email" class="mb-2">Email</label>
        <input id="email" v-model="form.email" type="email" placeholder="Email"
          class="border border-[#E6E6E6] rounded-[8px] h-[21px] p-6" />
      </div>
      <div class="flex flex-col w-full">
        <label for="password" class="mb-2">Password</label>
        <input id="password" v-model="form.password" type="password" placeholder="password"
          class="border border-[#E6E6E6] rounded-[8px] h-[21px] p-6" />
      </div>
      <div>
        <h5>Recuperar senha</h5>
      </div>
      <Button type="submit" text="Entrar" class="button" />
      <div class="flex justify-center items-center">
        <h5>Não tem uma conta? Registre-se</h5>
      </div>
    </form>
  </div>
</template>
