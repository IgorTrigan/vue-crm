import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import info from './info'
import category from './category'
import record from './record'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER
      return await (await fetch(`https://api.exchangerate-api.com/v4/latest/EUR`)).json()
    }
  },
  getters: {
    error: (s) => s.error,
  },
  modules: {
    auth, info, category, record
  },
});
