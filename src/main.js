import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './components/App.vue';
import StudentInfo from './components/StudentInfo.vue';
import Students from './components/Students.vue';
import store from './store.js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faPen);

const routes = [
  { path: '/', component: Students },
  { path: '/student-info/:id', component: StudentInfo, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
