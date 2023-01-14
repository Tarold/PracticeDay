import { createApp } from 'vue';
import App from './components/App.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faPen);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
