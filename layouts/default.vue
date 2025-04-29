<script setup lang="ts">

import Header from '~/components/organisms/Header/Header.vue';
import Footer from "~/components/organisms/Footer/Footer.vue";
import MobileMenu from "~/components/molecules/MobileMenu/MobileMenu.vue";


</script>

<template>
  <div class="w-full h-full">
    <Header />
    <div class="w-full h-full">
      <slot />
    </div>
    <Footer />
    <MobileMenu />

  </div>
</template>
