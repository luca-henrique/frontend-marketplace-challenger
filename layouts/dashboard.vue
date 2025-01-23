<script setup lang="ts">

import Header from '~/components/organisms/Header/Header.vue';
import Footer from "~/components/organisms/Footer/Footer.vue";
import DashboardLeftMenu from '~/components/molecules/DashboardLeftMenu/DashboardLeftMenu.vue';
</script>

<template>
  <div>
    <Header />
    <div class="flex flex-col p-8">
      <div class="flex flex-row justify-center gap-8">
        <DashboardLeftMenu />
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>
