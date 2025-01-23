<script setup lang="ts">

import Header from '~/components/organisms/Header/Header.vue';
import Footer from "~/components/organisms/Footer/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
