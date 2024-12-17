<script setup lang="ts">
  import { store } from '~/store/store';
  
  
  const response = await fetch("http://localhost:3333/product?limit=10");
  
  const {data} = await response.json()

  const { addProductCart } = store()
  
  
</script>

<template>
  <section class="product-list">
    <ul class="flex flex-row">
    <li v-if="data.length >= 1" v-for="item in data" :key="item.id">
        <div class="card">
          <img :src="item.image" alt="img" loading="lazy" width="150px" class="img" />
          <div class="name">{{ item.name }}</div>
          <div class="box">
            <h5 class="price">
              {{
                item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              }}
            </h5>
            <button class="btn" @click="addProductCart(item)">Comprar</button>
          </div>
        </div>
      </li> 
    </ul>
  </section>
</template>

<style lang="css" scoped>
  .product-list {
    display: flex;
    flex-direction: row;
    margin-top: 80px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  
.menu li a i {
  color: #f63e4e;
  font-size: 1.325rem;
}

.card {
  flex: 1;
  background-color: #f5f5f5;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  padding: 4px;
  margin-bottom: 20px;
}

.card img {
  height: 250px;
  width: 100%;
}

.card .desc {
  padding: 4px 20px;
  opacity: 0.8;
}

.card .title {
  font-weight: 900;
  font-size: 20px;
  color: #424144;
  padding: 0 20px;
}

.card .box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.card .price {
  font-size: 20px;
  font-weight: bold;
  color: #f63e4e;
}

.card .btn {
  font-size: 14px;
  color: #f63e4e;
  padding: 10px 18px;
  border: 1px solid #f63e4e;
  border-radius: 20px;
}

.card .btn:hover {
  cursor: point;
  background-color: #f63e4e;
  color: #fff;
}

.card .name {
  padding: 20px;
  font-weight: bold;
}

.product-list ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Cria 4 colunas iguais */
  gap: 10px; /* Espaço entre os itens */
  gap: 12px;
  width: 80%;
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