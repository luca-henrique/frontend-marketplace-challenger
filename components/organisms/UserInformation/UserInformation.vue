<script setup lang="ts">
import CardUserAddress from '~/components/molecules/CardUserAddress/CardUserAddress.vue';
import CardUserInformations from '~/components/molecules/CardUserInformations/CardUserInformations.vue';
</script>

<template>
  <div class="flex flex-row gap-6">
    <CardUserInformations />
    <CardUserAddress />
  </div>
</template>