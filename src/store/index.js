import Vue from 'vue';
import Vuex from 'vuex';
import songs  from "./songs";
import place  from "./place";
import genre  from "./genre";
import calendar  from "./calendar";
import repetition  from "./repetition";
import concert  from "./concert";
import eventDay  from "./eventDay";
import selectedDay  from "./selectedDay";
import auth  from "./auth";
import errors  from "./errors";
import info  from "./info";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    info, errors,auth,songs, place, genre, calendar, repetition,concert,eventDay,selectedDay
  },
});
