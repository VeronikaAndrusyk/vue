// src/services/api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000', // Замініть це на адресу вашого сервера
});

export default instance;
