// router/router.js
import { createRouter, createWebHistory } from 'vue-router'

// Importe seus componentes de rotas
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
  ]
})

export default router
