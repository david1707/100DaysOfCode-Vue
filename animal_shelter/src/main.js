import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuelidate from 'vuelidate'
import Toasted from 'vue-toasted'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Vuelidate);
Vue.use(Toasted);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDqb1JJTpOqyg4GL-4fe7hT22n5S_ASBL8',
    libraries: 'places',
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
