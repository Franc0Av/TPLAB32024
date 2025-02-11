import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";
import LoginView from "@/views/Login/LoginView.vue";
import TransactionsView from "@/views/Transactions/TransactionsView.vue";
import MovementsView from "@/views/Movements/MovementsView.vue";
import AnalysisView from "@/views/Analysis/AnalysisView.vue";
import { useAuthStore } from '@/stores/auth.js';
import { storeToRefs } from 'pinia';

const routes = [
    {
      path: '/Home',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/Transactions',
      name: 'Transactions',
      component: TransactionsView,
    },
    {
      path: '/Movements',
      name: 'Movements',
      component: MovementsView,
    },
    {
      path: '/Analysis',
      name: 'Analysis',
      component: AnalysisView,
    },
  ];

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  router.beforeEach((to, from, next) => {

    const authStore = useAuthStore();
    const { isUserLogged } = storeToRefs(authStore);

    if (to.name !== 'Login' && !isUserLogged.value) {
      next({ name: 'Login' });
    } else {
      next();
    }
  });
  
  export default router;