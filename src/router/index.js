import { createRouter, createWebHistory } from '@ionic/vue-router';
import Register from '../components/Register.vue';

const routes = [
  {
    path: '/',
    redirect: '/register',
  },
  {
    path: '/register/',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
