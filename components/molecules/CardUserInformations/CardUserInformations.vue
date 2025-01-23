<script setup lang="ts">
import { store } from "~/store/store";

const storeCart = store();
const { getToken } = storeToRefs(storeCart);

const loading = ref(false);
const user = ref({});

const userLoggedData = async () => {
  loading.value = true
  try {
    const { data, error } = await useFetch<any[]>('http://localhost:3333/me', {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${getToken.value}`,
      },
    });



    user.value = data.value.data || [];
    return { products: orders.value, error };
  } catch (error) {

  } finally {
    loading.value = false
  }
}

console.log(user.value)


watch(() => null, userLoggedData, { immediate: true });

</script>

<template>
  <div class="w-[536px] flex flex-col justify-center items-center border rounded-lg p-8 gap-2">
    <div class="w-[120px] h-[120px] rounded-full flex flex-col justify-center items-center border">
      <h5 class="text-xl font-medium text-[#1A1A1A]">LH</h5>
    </div>
    <h5 class="text-xl font-medium text-[#1A1A1A]">Lucas Henrique</h5>
    <h5 class="text-sm font-medium text-[#808080]">(671) 555-0110</h5>
    <NuxtLink>
      <h5 class="text-[#00B207] font-medium cursor-pointer">Editar Informações</h5>
    </NuxtLink>

  </div>
</template>