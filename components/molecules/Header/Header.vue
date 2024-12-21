<script setup lang="ts">
import { useRoute } from 'vue-router';

import { computed } from 'vue';

const route = useRoute();

const isOrderRoute = computed(() => route.path === '/order');
const isHomeRouter = computed(() => route.path === '/');
const isCheckoutRouter = computed(() => route.path === '/checkout');

</script>

<template>
  <header class="w-screen">
    <div class="flex flex-row justify-between">
      <h1 class="padding-vertical"><a href="/">Marketplace</a></h1>
      <div class="flex flex-row menu-navigation padding-vertical">
        <nav class="flex flex-row">
          <ul class="menu flex flex-row items-center gap-16">
            <li><a href="/" :class="isHomeRouter && 'active'">Home</a></li>
            <li><a href="/order" :class="isOrderRoute && 'active'">Meus pedidos</a></li>
            <li>
              <a href=" /checkout" :class="isCheckoutRouter && 'active'"><i class="bx bx-shopping-bag"></i></a>
            </li>
            <li>
              <a href="/login"><i class="bx bx-user"></i></a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex flex-row items-center gap-2 mobile-container">
        <a href="#"><i class="bx bx-shopping-bag"></i></a>
        <button class="menu-mobile">
          <i class="bx bx-menu"> </i>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped lang="css"></style>
