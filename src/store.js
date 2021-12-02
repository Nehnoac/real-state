import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
    };
  },

  mutations: {
    SET_DARK_MODE(state, payload) {
      state.darkMode = payload;
    }
  },

  actions: {
    toggleDarkMode({ state, commit }) {
      commit('SET_DARK_MODE', !state.darkMode);
    }
  }
});
