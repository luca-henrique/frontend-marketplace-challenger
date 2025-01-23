<script setup lang="ts">
import { ref } from 'vue';

import Button from '~/components/atoms/Button/Button.vue';

const form = ref({
  email: "",
})

const router = useRouter();

const handleSubmit = async (event: Event) => {
  try {
    event.preventDefault();

    const response = await fetch("http://localhost:3333/recovery-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    router.push('/')
  } catch (error) {
    console.error("Erro ao enviar o produto:", error);
  }
};

</script>

<template>
  <div class="flex flex-col justify-center items-center bg-[#ededed] h-full">
    <form @submit="handleSubmit" class="w-[520px] my-[80px] bg-white flex flex-col p-6 rounded-lg shadow-md gap-4">
      <div class="flex justify-center items-center ">
        <h1 class="font-semibold text-3xl">Recuperar conta</h1>
      </div>
      <div class="flex flex-col w-full">
        <label for="email" class="mb-2">Email</label>
        <input id="email" v-model="form.email" type="email" placeholder="Email"
          class="border border-[#E6E6E6] rounded-[8px] h-[21px] p-6" autocomplete="off" />
      </div>
      <Button type="submit" text="Solicitar nova senha" class="button" />
      <div class="flex justify-center items-center">
        <h5 class="text-[#666666] font-normal text-sm">Já tenho conta?
          <NuxtLink href="/entrar" class="text-[#1A1A1A] font-semibold text-sm">
            Faça login
          </NuxtLink>
        </h5>
      </div>
    </form>
  </div>
</template>
