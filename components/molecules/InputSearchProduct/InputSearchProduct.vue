<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const handleSearchProduct = (payload: Event) => {
  payload.preventDefault()
  const form = payload.target as HTMLFormElement;
  const input = form.querySelector('input[type="text"]') as HTMLInputElement;

  const isHome = route.path !== '/products';

  if (input) {
    router.replace({
      path: isHome ? '/products' : route.path,
      query: {
        ...route.query,
        search: input.value || undefined, // Remove `search` se vazio
      },
    });
  }
}
</script>

<template>
  <form class="flex flex-row w-[497px] mx-4 max-sm:h-[38px] md:w-full" @submit.prevent="handleSearchProduct">
    <input type="text" placeholder="Search"
      class="w-full bg-[#Fff] border-[1px] border-[#d5d5d5] h-[44px] max-sm:h-[38px] p-3 rounded-s-md" />

    <button type="submit">
      <img src="~/assets/icons/search-icon.svg" alt="Search Icon"
        class="w-[54px] max-sm:h-[38px] bg-[#00B207] p-2 rounded-r-md" />
    </button>
  </form>
</template>