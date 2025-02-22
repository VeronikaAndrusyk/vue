import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

createApp(App).use(store).use(router).mount('#app')

// Виконання GET-запиту до вашого сервера
axios.get('http://127.0.0.1:5000/api/data') // замініть це на URL вашого сервера
  .then(response => {
    // Отримання результатів від сервера
    console.log(response.data);
  })
  .catch(error => {
    // Обробка помилок
    console.error('Error fetching data:', error);
  });
