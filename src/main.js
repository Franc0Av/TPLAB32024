import { createApp } from 'vue';
import router from '@/router/router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
