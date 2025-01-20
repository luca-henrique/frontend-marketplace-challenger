<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
import HeaderLogo from "~/components/molecules/HeaderLogo/HeaderLogo.vue";

import { store } from "~/store/store";

const storeCart = store();

const { getTotalWhiteList, getTotalCart, getToken } = storeToRefs(storeCart);


const handleSearchProduct = (payload: Event) => {
  payload.preventDefault()
  const form = payload.target as HTMLFormElement;
  const input = form.querySelector('input[type="text"]') as HTMLInputElement;

  const isHome = route.path === '/';

  if (input) {
    router.push({
      path: isHome ? '/products' : route.path,
      query: {
        ...route.query,
        search: input.value || undefined, // Remove `search` se vazio
      },
    });
  }
}

const pathIconUser = getToken.value ? '/dashboard' : '/login';

</script>

<template>
  <header class="flex flex-row border-b-2 border-[#E5E5E5] p-4 items-center justify-around">

    <HeaderLogo />

    <form class="flex flex-row w-[497px] mx-4 h-[44px]" @submit.prevent="handleSearchProduct">
      <input type="text" placeholder="Search"
        class="w-full bg-[#Fff] border-[1px] border-[#d5d5d5] h-[44px] p-3 rounded-s-md" />

      <button type="submit">
        <img src="~/assets/icons/search-icon.svg" alt="Search Icon"
          class="w-[54px] h-[44px] bg-[#00B207] p-2 rounded-r-md" />
      </button>
    </form>
    <div class="flex flex-row gap-4">
      <NuxtLink class="flex flex-row  relative items-center" href="/whitelist">
        <img src="~/assets/icons/heart-icon.svg" alt="Cart Icon" class="h-8 w-8" />
        <p
          class="absolute -top-1 w-6 h-6 -right-2 flex items-center justify-center bg-green-500 font-light text-xs text-white rounded-full border-2 border-white">
          {{ getTotalWhiteList }}</p>
      </NuxtLink>

      <NuxtLink class="flex flex-row  relative items-center gap-4" href="/order">
        <img src="~/assets/icons/bag-outlined-icon.svg" alt="Cart Icon" class="h-8 w-8" />
        <p
          class="absolute -top-1 left-5 w-6 h-6  flex items-center justify-center bg-green-500 font-light text-xs text-white  rounded-full border-2 border-white">
          {{ getTotalCart }}</p>
      </NuxtLink>

      <NuxtLink class="flex flex-row  relative items-center gap-4" :href="pathIconUser">
        <img src="~/assets/icons/user-icon.svg" alt="Cart Icon" class="h-8 w-8" />
      </NuxtLink>
    </div>
  </header>
</template>