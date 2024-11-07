import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

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
  ];

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;