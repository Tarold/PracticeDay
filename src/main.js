import { createApp } from 'vue';
import './style.css';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './components/App.vue';
import StudentInfo from './components/StudentInfo.vue';
import Students from './components/Students.vue';

const routes = [
  { path: '/', component: Students },
  { path: '/student-info/:id', component: StudentInfo, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
