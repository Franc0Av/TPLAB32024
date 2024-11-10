import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";
import LoginView from "@/views/Login/LoginView.vue";
import TransactionsView from "@/views/Transactions/TransactionsView.vue";
import MovementsView from "@/views/Movements/MovementsView.vue";
import AnalysisView from "@/views/Analysis/AnalysisView.vue";

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
  
  export default router;