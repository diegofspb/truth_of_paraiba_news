// main.js
import { createApp } from 'vue';
import App from './App.vue';
//importando o TAIL WIND de forma global
import './output.css';
import router from './router';

import store from '@/store';
import 'tailwindcss/tailwind.css';

import Vuetify from '@/plugins/vuetify';


createApp(App)
    .use(router)
    .use(Vuetify)
    .use(store)
    .mount('#app');
