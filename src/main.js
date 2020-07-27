import Vue from "vue";
import Vuelidate from "vuelidate";
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import localizeFilter from "./filters/localize.filter";
import messagePlugin from "./utils/message.plugin";
import titlePlugin from "./utils/title.plugin";
import Loader from '../src/components/app/Loader'
import "materialize-css/dist/js/materialize.min";
import tooltipDirective from './directives/tooltip.directive'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import currencyFilter from "./filters/currency.filter";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.use(titlePlugin);
Vue.use(VueMeta);
Vue.filter("date", dateFilter);
Vue.filter("localize", localizeFilter);
Vue.filter("currency", currencyFilter);
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyAoWk8nLnkE7hNU0b7n62EqT-hGpV7NXz8",
  authDomain: "vue-crm-e7e07.firebaseapp.com",
  databaseURL: "https://vue-crm-e7e07.firebaseio.com",
  projectId: "vue-crm-e7e07",
  storageBucket: "vue-crm-e7e07.appspot.com",
  messagingSenderId: "490104534451",
  appId: "1:490104534451:web:64717cc30bf744fcad47c6",
  measurementId: "G-Z24XJ6Z108",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
