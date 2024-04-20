import Login from '@/views/auth/Login.vue'; // Importe o componente de login
import Register from '@/views/auth/Register.vue'; // Importe o componente de registro

const AuthRoutes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];

export default AuthRoutes;
