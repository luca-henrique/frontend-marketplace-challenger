<script setup lang="ts">
import CardInformationMarket from "~/components/molecules/CardInformationMarket/CardInformationMarket.vue";
</script>

<template>
  <section class="flex justify-center items-center mt-4 ">
    <div class="flex flex-row shadow-lg p-10 gap-8">
      <CardInformationMarket />
      <CardInformationMarket title="Customer Support 24/7" description="Instant access to Support" icon="headphone" />
      <CardInformationMarket icon="shoppingBag" title="100% Secure Payment"
        description="We ensure your money is save" />
      <CardInformationMarket icon="package" title="Money-Back Guarantee" description="30 Days Money-Back Guarantee" />
    </div>
  </section>
</template>