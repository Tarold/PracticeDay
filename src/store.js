import { createStore } from 'vuex';

const store = createStore({
  state: {
    cart: [],
  },
  mutations: {
    setCart: (state, tovar) => state.cart.push({ tovar }),
    delCart: (state, index) => {
      state.cart = [
        ...state.cart.slice(0, index),
        ...state.cart.slice(index + 1, state.cart.length),
      ];
    },
  },
  getters: {
    getCart: (state) => {
      return state.cart;
    },
  },
});

export default store;
