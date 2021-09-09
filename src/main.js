import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import JwPagination from "jw-vue-pagination";

Vue.config.productionTip = false;
Vue.component("jw-pagination", JwPagination);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
