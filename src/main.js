// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'fullpage.js/vendors/scrolloverflow'
// import VueFullPage from 'vue-fullpage.js/dist/vue-fullpage.js'

Vue.config.productionTip = false
// Vue.use(VueFullPage);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // render:(h)=>h(app)
})
