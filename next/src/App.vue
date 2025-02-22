<!-- eslint-disable no-undef -->
<template>
  <div
    class="site-container"
    :class="{ 'staff-page': $route.path === '/staff' }"
  >
  <div class="logo animated-text"></div>
      
    <nav>
      <div class="logo animated-text"></div>
      <div class="overlay-text animated-text shake">Гуртожиток<br />№4 УжНУ</div>
      <router-link to="/">Головна</router-link> |
      <router-link to="/staff">Персонал</router-link> |
      <router-link to="/login">Увійти</router-link> |
      <router-link to="/singUp">Створити</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["getUser"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    onLogout() {
      this.logout();
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.site-container {
  position: relative;
}

.home-page {
  background-image: url("@/assets/ф1.jpg");
  background-size: cover;
  background-position: center;
}

.about-page {
  background-color: white; /* Set background color for the About page */
}

nav {
  position: fixed;
  top: 0;
  left: -470px;
  width: 100%;
  padding-top: 30px; /* Залиште верхній відступ */
  padding-right: -400px; /* Змініть значення цього відступу за потребою */
  color: transparent;
  z-index: 2; /* Ensure the navigation is above the background */
  font-size: 18px;
  text-decoration: none;
}

nav a {
  font-weight: bold;
  color: #ffffff;

  &.router-link-exact-active {
    color: #42b983;
  }
}
.logo {
  width: 70px; 
  height: 50px; 
  background-image: url("@/assets/лого1.png"); 
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 20px; 
  left: 50px; 
}
.overlay-text {
  font-family: "Helious", sans-serif;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: l;
  position: fixed;
  top: 26px;
  left: 104px;
  text-align: left;
}
</style>
