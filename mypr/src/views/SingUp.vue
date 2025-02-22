<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div>
      <img src="@/assets/L1.png" alt="Description of the image" />
     <div class="login-form">
      <h2>РЕЄСТРАЦІЯ</h2>
      <form @submit.prevent="register">
        <label for="newUsername">Ім'я:</label>
        <input type="text" id="newUsername" v-model="newUsername" required>
        <br>
        <label for="newPassword">Пароль:</label>
        <input type="password" id="newPassword" v-model="newPassword" required>
  
        <button type="submit">ЗАРЕЄСТУВАТИСЬ</button>
      </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newUsername: '',
        newPassword: '',
      };
    },
    methods: {
      register() {
        // Dispatch the 'register' action to handle user registration
        this.$store.dispatch('register', {
          username: this.newUsername,
          password: this.newPassword,
        });
      },
    },
  };
  </script>
  
  <style scoped>


.login-form {
  text-align: center;
  color: white;
  background-color: #10279B;
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
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: 2px solid lightgray;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  animation: pulse 2s infinite;
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