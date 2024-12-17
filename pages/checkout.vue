<script setup lang="ts">



import { store } from "~/store/store";
import { ref } from "vue";
const storeCart = store();
const selectedOption = ref("");
const paymentOption = ref("");

const { removeProductCart, products, incrementProductCart, resetCart } =
  storeCart;

const { getTotal, getCart, getToken } = storeToRefs(storeCart);
const router = useRouter();

const handleSubmitOrder = async () => {
  try {
    const submitEvent = {
      payment: paymentOption.value,
      addressId: selectedOption.value,
      products,
    };

    const response = await fetch("http://localhost:3333/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${getToken}`,
      },
      body: JSON.stringify(submitEvent),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    
    router.push("/");

    resetCart();

  } catch (error) {
    console.error("Erro ao enviar o produto:", error);
  }
};

const response = await fetch("http://localhost:3333/address-by-user", {
  headers: {
    Authorization:
    `Bearer ${getToken}`,
  },
});

const { address } = await response.json();
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="flex flex-row items-center header-title">
        <h1>Shopping Cart</h1>
      </div>
      <div class="flex flex-row justify-end items-center cart-information">
        <i class="bx bx-shopping-bag"></i>
        <h6 class="cart-information">{{ getCart.length }} items</h6>
      </div>
      <div class="cart-list" v-for="item in getCart" :key="item.id">
        <div class="cart-card items-center justify-between">
          <div class="flex flex-row items-center">
            <img class="img" :src="item.image" alt="img" />
            <h4 class="title">
              {{ item.name }}
            </h4>
          </div>
          <div class="flex flex-row items-center gap-2">
            <button
              class="btn-control-quantity"
              @click="incrementProductCart(item.id)"
            >
              <i class="bx bx-plus"></i>
            </button>
            <p>
              {{ item.quantity }}
            </p>
            <button
              class="btn-control-quantity"
              @click="removeProductCart(item.id)"
            >
              <i class="bx bx-minus"></i>
            </button>
            <p>
              {{
                item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              }}
            </p>
          </div>
        </div>
      </div>
      <h3>Escolha um endereço:</h3>
      <div
        class="cart-list flex flex-row justify-between"
        v-for="location in address"
        :key="location.id"
      >
        <div class="flex flex-row items-center gap-2">
          <h5 class="label">
            {{ location.zipCode }}
          </h5>
          <h5 class="label">
            {{ location.address }}
          </h5>
          <h5 class="label">{{ location.city }} / {{ location.uf }}</h5>

          <input
            type="radio"
            v-model="selectedOption"
            required
            :value="location.id"
          />
        </div>
      </div>

      <div>
        <h3>Escolha uma opção para o pagamento:</h3>

        <label>
          <input type="radio" value="CREDIT_CARD" v-model="paymentOption" />
          Cartão de credito
        </label>

        <label>
          <input type="radio" value="PIX" v-model="paymentOption" />
          PIX
        </label>

        <label>
          <input type="radio" value="INVOICE" v-model="paymentOption" />
          Boleto
        </label>

        <label>
          <input type="radio" value="DEBIT_CARD" v-model="paymentOption" />
          Cartão de debito
        </label>

        <label>
          <input type="radio" value="CASH" v-model="paymentOption" />
          Dinheiro
        </label>
      </div>

      <div class="order-summary">
        <h3>Order Summary</h3>
        <div class="flex flex-row justify-between">
          <h5 class="label">Item total</h5>
          <h5 class="label">
            {{
              getTotal.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h5>
        </div>
        <div class="flex flex-row justify-between">
          <h5 class="label">Transporte</h5>
          <h5 class="label">
            {{
              Number(10).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h5>
        </div>
        <div class="flex flex-row justify-between">
          <h5 class="label">Discontos</h5>
          <h5 class="label">
            {{
              Number(10).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h5>
        </div>
        <div class="flex flex-row justify-between">
          <h5 class="label">Total</h5>
          <h5 class="label">
            {{
              (getTotal + 10 + 10).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h5>
        </div>
      </div>

      <button class="btn-checkout" @click="handleSubmitOrder()">
        Finalizar compra
      </button>
    </div>
  </div>
</template>

<style scoped>
button {
  border: none;
  background-color: transparent;
}

.order-summary {
  display: flex;
  flex-direction: column;
  background-color: #ebebeb;
  margin-bottom: 40px;
  padding: 10px;
  gap: 8px;
}

.order-summary .label {
  font-weight: 400;
  color: #8f8f8f;
}

.label {
  font-weight: 400;
  color: #8f8f8f;
}

.justify-end {
  justify-content: flex-end;
}

.justify-between {
  justify-content: space-between;
}

.cart-information {
  font-size: 14px;
  font-weight: 500;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 40px;
}

.cart-information i {
  margin-right: 8px;
}

.header-title {
  margin-top: 40px;
  margin-bottom: 20px;
}

.content {
  width: 80%;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.cart-card {
  display: flex;
  flex-direction: row;
  border: 1px solid #f4f4f4;
  padding: 10px;
}

.cart-card img {
  width: 100px;
}

.cart-card .title {
  font-weight: 400;
  color: #8e8e8e;
  margin-left: 8px;
}

.btn-control-quantity {
  border: none;
  background-color: transparent;
}

.btn-checkout {
  background-color: #5dade2;
  border: none;
  color: #f4f4f4;
  padding: 18px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
}
</style>
