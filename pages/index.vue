<script setup lang="ts">
import '@/assets/css/tailwind.css'
import ListProducts from '~/components/organisms/ListProducts/ListProducts.vue';
import Header from '~/components/molecules/Header/Header.vue';
</script>

<template>
  <div class="container ">
    <Header />
    <ListProducts />
  </div>
</template>

<style lang="css">
h1,
h2,
h3,
h4,
h5 {
  padding: 0;
  margin: 0px;
}

a {
  text-decoration: none;
  color: #000;
}

.items-center {
  align-items: center;
}

body {
  height: 100%;
}

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-row {
  flex-direction: row;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.flex-col {
  flex-direction: column;
}


.justify-between {
  justify-content: space-between;
}

ul {
  list-style-type: none;
  margin: 0 !important;
  padding: 0;
}

.flex-col {
  flex-direction: column;
}

.menu-mobile {
  display: none;
  border: none;
  font-size: 22px;
  background-color: transparent;
}

.gap-2 {
  gap: 2px;
}

.gap-4 {
  gap: 4px;
}

.gap-8 {
  gap: 8px;
}

.gap-16 {
  gap: 16px;
}

.active {
  border-bottom: 2px solid #f63e4e;
}

.mobile-container {
  display: none;
}

@media (max-width: 768px) {
  .product-list ul {
    grid-template-columns: repeat(2,
        1fr);
    /* Altera para 2 colunas em telas menores */
  }

  .product-list {
    margin-top: 40px;
    justify-content: center;
    align-items: center;
  }

  .menu-navigation {
    display: none;
  }

  .menu-mobile {
    display: flex;
  }

  .mobile-container {
    display: flex;
  }
}

@media (max-width: 480px) {
  .product-list ul {
    grid-template-columns: 1fr;
  }
}

.justify-center {
  justify-content: center;
}
</style>
