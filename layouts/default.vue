<script setup lang="ts">

import Header from '~/components/organisms/Header/Header.vue';
import Footer from "~/components/organisms/Footer/Footer.vue";
</script>

<template>
  <div class="w-full h-full">
    <Header />
    <div class="w-full h-full">
      <slot />
    </div>
    <Footer />
  </div>
</template>
