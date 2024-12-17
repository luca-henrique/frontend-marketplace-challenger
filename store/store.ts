import { defineStore } from "pinia";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderProduct {
  id_product: number;
  quantity: number;
  image: string;
}

interface State {
  cart: Product[];
  total: number;
  products: OrderProduct[];
  token: string;
}

export const store = defineStore("store", {
  state: (): State => ({
    cart: [],
    total: 0,
    products: [],
    token: "",
  }),
  getters: {
    getCart: (state) => state.cart,
    getTotal: (state) => state.total,
    getProducts: (state) => state.products,
    getToken: (state) => state.token,
  },
  actions: {
    addProductCart(payload: Product) {
      const findProduct = this.cart.find(
        (product) => product.id === payload.id
      );

      if (findProduct) {
        this.cart = this.cart.map((product) =>
          product.id === payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        this.cart = [...this.cart, { ...payload, quantity: 1 }];
      }

      const products = this.getCart.map((item) => {
        return {
          id_product: item.id,
          quantity: item.quantity,
        };
      });

      this.products = products;

      this.total += payload.price;
    },
    removeProductCart(productId: number) {
      const findProduct = this.cart.find((product) => product.id === productId);

      if (!findProduct) {
        console.warn("Produto não encontrado no carrinho");
        return;
      }

      if (findProduct.quantity > 1) {
        this.cart = this.cart.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      } else {
        this.cart = this.cart.filter((product) => product.id !== productId);
      }

      const products = this.getCart.map((item) => {
        return {
          id_product: item.id,
          quantity: item.quantity,
        };
      });

      this.products = products;

      this.total -= findProduct.price;

      if (this.total < 0) {
        this.total = 0;
      }
    },
    incrementProductCart(productId: number) {
      const findProduct = this.cart.find((product) => product.id === productId);

      if (findProduct) {
        this.cart = this.cart.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      this.getCart.map((item) => {
        this.total += item.price;
      });
    },

    resetCart() {
      this.cart = [];
      this.total = 0;
    },

    addToken(token: string) {
      this.token = token;
    },

    removeToken() {
      this.token = "";
    },
  },

  persist: true,
});
