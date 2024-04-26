// main.js
import { createApp } from 'vue';
import App from './App.vue';
//importando o TAIL WIND de forma global
import './output.css';
import '@/assets/tailwind.css';

import router from './router';

import store from '@/store';



createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
