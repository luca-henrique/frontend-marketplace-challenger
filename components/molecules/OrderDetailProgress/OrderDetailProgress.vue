<script setup lang="ts">

import StepProgress from 'vue-step-progress';


</script>

<template>
  <div>
    <StepProgress :steps="['Pedido recebido', 'Processamento', 'Saiu para entrega', 'Entregue']" passive-color="#b5b5b5"
      active-color="#23d160" :passive-thickness="2" :active-thickness="2" :line-thickness="2"
      icon-class="fa fa-check" />
  </div>
</template>
