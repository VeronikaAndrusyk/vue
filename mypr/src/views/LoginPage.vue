<template>
    <div>
      <img src="@/assets/L1.png" alt="Description of the image" />
      <div class="login-form">
        <h2>АВТОРИЗАЦІЯ</h2>
        <form @submit.prevent="login">
          <label for="username">Ім'я:</label>
          <input type="text" id="username" v-model="username" required />
          <br />
          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="password" required />
  
          <button type="submit">
            {{ isAuthenticated ? "ВИЙТИ" : "УВІЙТИ" }}
          </button>
          <button @click="handleGoogle()">Google</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { auth } from "@/firebase-config.js";
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated;
      },
    },
    methods: {
      handleGoogle() {
        const provider = new GoogleAuthProvider(); //використовуємо функцію авторизації у спливаючому вікні
  
        signInWithPopup(auth, provider)
          .then(() => {
            this.$router.push("/settlement");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .login-form {
    text-align: center;
    color: white;
    background-color: #10279b;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 400px;
    left: 50%;
  
    transform: translate(-50%, -50%);
    border: 2px solid white;
  }
  
  .login-form label,
  .login-form input,
  .login-form button {
    margin: 10px 10px;
  }
  
  /* Стилі для інпутів та кнопки */
  .login-form input[type="text"],
  .login-form input[type="password"] {
    width: 70%;
    padding: 10px;
    border: 2px solid lightgray;
    border-radius: 50px;
  }
  
  .login-form button {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: 2px solid lightgray;
    border-radius: 50px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    animation: pulse 3тзь s infinite;
  }
  
  .login-form button:hover {
    background-color: #45a049;
  }
  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }
  </style>
  