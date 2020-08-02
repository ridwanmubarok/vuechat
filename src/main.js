import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import { JitsiMeet } from '@mycure/vue-jitsi-meet';

Vue.config.productionTip = false;
Vue.use(JitsiMeet);

Vue.use(Vuesax, {
  // options here
})

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
