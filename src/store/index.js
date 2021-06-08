import Vue from 'vue';
import Vuex from 'vuex';
import songs  from "./songs";
import place  from "./place";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    songs, place
  },
});
