// main.js
import { createApp } from 'vue';
import App from './App.vue';
//importando o TAIL WIND de forma global
import './output.css';
import router from '@/router';
// import Header from '@/layouts/Header.vue';
import store from '@/store';
import 'tailwindcss/tailwind.css'

// import axios from 'axios';



createApp(App)
    .use(router)
    // .use(axios)
    .use(store)
    .mount('#app')
