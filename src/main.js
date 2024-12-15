import { createApp } from 'vue';
import router from '@/router/router';
import App from './App.vue';
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia)
app.mount('#app');
