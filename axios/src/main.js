import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-http-dd35e.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'fasjl'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log(config);
  return config;
})

const resInterceptor = axios.interceptors.response.use(res => {
  console.log(res);
  return res;
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
