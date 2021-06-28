import Vue from 'nativescript-vue';

import Home from './components/Home';

import axios from 'axios';

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start();


Vue.prototype.$axios = axios;
Vue.prototype.$axios.defaults.baseURL = 'https://fujimoto.develop.gametector.com';