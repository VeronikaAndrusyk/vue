import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // імпорт сховища

const app = createApp(App);
app.use(router);
app.use(store); // використання сховища

app.mount('#app');

