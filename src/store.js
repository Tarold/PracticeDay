import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  state: {
    count: 0,
    isDark: false,
  },
  mutations: {
    setCount: (state, count) => (state.count = count),
    toggleIsDark: (state) => (state.isDark = !state.isDark),
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    getIsDark: (state) => {
      return state.isDark;
    },
  },
  plugins: [createPersistedState()],
});
export default store;
