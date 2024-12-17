<script setup lang="ts">
import ListProducts from '~/components/organisms/ListProducts/ListProducts.vue';



</script>

<template>
  <div class="container">
    <header class="flex flex-row navigation">
      <h1 class="active">Marketplace</h1>
      <div class="flex flex-row menu-navigation">
        <nav class="flex flex-row">
          <ul class="menu flex flex-row items-center gap-16">
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">Produtos</a></li>
            <li>
              <a href="/checkout"><i class="bx bx-shopping-bag"></i></a>
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
    </header>

    <ListProducts />
  </div>
</template>

<style>
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

.navigation {
  padding: 20px 4%;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 9999;
  background-color: #f4f4f6;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.3);
}

ul {
  list-style-type: none;
  margin: 0 !important;
  padding: 0;
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

.mobile-container{
  display: none;
}

@media (max-width: 768px) {
  .product-list ul {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Altera para 2 colunas em telas menores */
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
  
  .mobile-container{
    display: flex;
  }
}

@media (max-width: 480px) {
  .product-list ul {
    grid-template-columns: 1fr; 
  }
}
</style>
