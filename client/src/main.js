// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate';
import {sync} from 'vuex-router-sync';
import store from './store/store'
import 'vuetify/dist/vuetify.min.css'


Vue.use(VeeValidate);
 
sync(store, router);

Vue.config.productionTip = false

// Using custom made plugin
Vue.use(require('./services/AuthenticationService'));

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
