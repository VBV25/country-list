import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    countriesList: [],
    currentCountry: {},
    error: '',
  },
  getters: {
    readError: (state) => state.error,
    readCountriesList: (state) => state.countriesList,
    readCurrentCountry: (state) => state.currentCountry,
  },
  mutations: {
    changeError(state, newError) {
      state.error = newError;
    },
    changeListCountries(state, newCountriesList) {
      state.countriesList = newCountriesList;
    },
    changeCurrentCountry(state, newCurrentCountry) {
      state.currentCountry = newCurrentCountry;
    },
  },
  actions: {
    //---sync--
    rewriteCurrentCountry({ commit }, newCountry) {
      commit('changeCurrentCountry', newCountry);
    },

    //--async--
    async getCountriesList({ commit }) {
      try {
        const response = await axios.get('./data.json');
        commit('changeListCountries', response.data);
      } catch (error) {
        console.log(error);
        commit('changeError', error);
      }
    },
  },
});
