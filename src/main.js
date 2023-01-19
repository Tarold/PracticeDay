import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './components/App.vue';
import WeatherShow from './components/WeatherShow.vue';
import Weather from './components/Weather.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import VueAxios from 'vue-axios';

library.add(faTrash, faPen);

const routes = [
  { path: '/', component: Weather },
  { path: '/WeatherShow/:city', component: WeatherShow, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(VueAxios, axios)
  .use(router)
  .mount('#app');
