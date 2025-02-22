<!-- App.vue -->
<template>
  <div id="app">
    <nav>
      <!-- Навігаційна панель з компонентом Navbar.vue -->
      <Navbar />
    </nav>
    <main>
      <!-- Додайте ваш компонент Main.vue тут -->
      <Main />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'; // Шлях до компонента Navbar.vue
import Main from './components/Main.vue'; // Шлях до компонента Main.vue

export default {
  components: {
    Navbar,
    Main,
  },
};
</script>

<style>
/* Глобальні стилі для додатку */
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

nav {
  background-color: #8fa59b;
  padding: 10px;
  width: 100%;
}

main {
  width: 80%;
  padding: 10px;
  background-color: rgb(236, 236, 231);
  
}
</style>

