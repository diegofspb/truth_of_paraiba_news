// Importações dos módulos
import { createRouter, createWebHistory } from 'vue-router';


// Definição das rotas

import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...AuthRoutes,
        ...MainRoutes,
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/pages/Error404.vue')
        },
    ],
});

export default router;
