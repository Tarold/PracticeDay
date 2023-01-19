import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './components/App.vue';
import WeatherGet from './components/WeatherGet.vue';
import Weather from './components/Weather.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faDroplet,
  faTemperature0,
  faCloud,
  faWind,
  faCompass,
  faAudioDescription,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import VueAxios from 'vue-axios';

library.add(
  faDroplet,
  faTemperature0,
  faCloud,
  faWarning,
  faAudioDescription,
  faWind,
  faCompass
);

const routes = [
  { path: '/', component: Weather },
  { path: '/weather-show/:city', component: WeatherGet, props: true },
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
