import Vue from "vue";
import Vuex from "vuex";

import layout from "./layout";
import form from "./form";
import auth from "./auth";
import worker from "./worker";
import serviceTypes from "./serviceTypes";
import feedback from "./feedback";
import booking from "./booking";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    form,
    auth,
    worker,
    serviceTypes,
    feedback,
    booking,
  },
});
