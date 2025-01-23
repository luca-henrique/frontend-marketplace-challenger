<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

import CardHistoryOrders from "~/components/molecules/CardHistoryOrders/CardHistoryOrders.vue";
import UserInformation from "~/components/organisms/UserInformation/UserInformation.vue";


</script>

<template>
  <div class="flex flex-col gap-6 mb-10">
    <UserInformation />
    <CardHistoryOrders />
  </div>
</template>
