import { createStore } from 'vuex';

export default createStore({
  state: {
    likes: 1,
    isAuth: false,
  },
  getters: {
    // computed функции
    doubleLikes(state) {
      return state.likes * 2;
    },
  },
  mutations: {
    // изменение состояний
    incrementLikes(state) {
      state.likes += 1;
    },
    decrementLikes(state) {
      state.likes -= 1;
    },
  },
  actions: {},
  modules: {},
});
