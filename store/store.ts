import { defineStore } from "pinia";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity?: number;
  image: string;
  rating: number;
  promotion?: number;
  stock: number;
}

interface CartProps extends Product {
  quantity: number;
}

interface OrderProduct {
  id_product: number;
  quantity: number;
  image: string;
}

type OrderProducts = Omit<OrderProduct, "image">;

interface State {
  cart: CartProps[];
  total: number;
  products: OrderProducts[];
  token: string;
  whitheList: Product[];
  search: string;
}

export const store = defineStore("store", {
  state: (): State => ({
    cart: [],
    total: 0,
    products: [],
    token: process.server ? "" : localStorage.getItem("token") ?? "",
    whitheList: [],
    search: "",
  }),
  getters: {
    getCart: (state) => state.cart,
    getWhiteList: (state) => state.whitheList,
    getTotal: (state) => state.total,
    getProducts: (state) => state.products,
    getToken: (state) => state.token,
    getTotalWhiteList: (state) => state.whitheList.length,
    getTotalCart: (state) => state.cart.length,
    getTotalCartPrice: (state) =>
      state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
  },
  actions: {
    setQuery(newQuery: string) {
      this.search = newQuery;
    },
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

      const products: OrderProducts[] = this.getCart.map((item) => {
        return {
          id_product: item.id,
          quantity: item.quantity,
        };
      });

      this.products = products;

      this.total += payload.price;
    },
    decrementProductCart(productId: number) {
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
    removeProductCart(productId: number) {
      const findProduct = this.cart.find((product) => product.id === productId);

      if (!findProduct) {
        console.warn("Produto não encontrado no carrinho");
        return;
      }

      this.cart = this.cart.filter((product) => product.id !== productId);

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
    },

    resetCart() {
      this.cart = [];
      this.total = 0;
      this.products = [];
      this.token = "";
    },

    addToken(token: string) {
      this.token = token;
    },

    removeToken() {
      this.token = "";
    },

    addProductWhiteList(payload: Product) {
      const findProduct = this.whitheList.find(
        (product) => product.id === payload.id
      );

      if (!findProduct) {
        this.whitheList = [...this.whitheList, { ...payload, quantity: 1 }];
      }
    },

    removeProductWhiteList(productId: number) {
      const findProduct = this.whitheList.find(
        (product) => product.id === productId
      );

      if (!findProduct) {
        console.warn("Produto não encontrado no carrinho");
        return;
      }

      this.whitheList = this.whitheList.filter(
        (product) => product.id !== productId
      );
    },

    parseProductWhiteListToCart(payload: Product) {
      const findProduct = this.whitheList.find(
        (product) => product.id === payload.id
      );

      if (!findProduct) {
        console.warn("Produto não encontrado no carrinho");
        return;
      }

      this.whitheList = this.whitheList.filter(
        (product) => product.id !== findProduct.id
      );

      this.addProductCart(findProduct);
    },
  },
  persist: true,
});
