// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueTouch from "vue-touch";
import Trend from "vuetrend";
import Toasted from "vue-toasted";
import VueApexCharts from "vue-apexcharts";

import store from "./store";
import router from "./Routes";
import App from "./App";
import layoutMixin from "./mixins/layout";
import Widget from "./components/Widget/Widget";
import Badge from "./components/Badge";
import BaseButton from "./components/BaseButton";
import Card from "./components/Card";
import Icon from "./components/Icon";
import firebase from "firebase/app";
Vue.component(Badge.name, Badge);
Vue.component(BaseButton.name, BaseButton);
Vue.component(Card.name, Card);
Vue.component(Icon.name, Icon);
Vue.use(BootstrapVue);
Vue.use(VueTouch);
Vue.use(Trend);
Vue.component("Widget", Widget);
Vue.component("apexchart", VueApexCharts);
Vue.mixin(layoutMixin);
Vue.use(Toasted, { duration: 10000 });

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyDJr2okbjf74Yeuaf7lmHeEgqyVIcwb2Fc",
  authDomain: "application-test-4750a.firebaseapp.com",
  databaseURL: "https://application-test-4750a.firebaseio.com",
  projectId: "application-test-4750a",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

firebase.initializeApp(configOptions);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
