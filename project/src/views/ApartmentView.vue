<template>
  
  <div class="fullscreen-image">
    
    <div class="solid" @click="togglePopup">
      <!-- Add four buttons without events -->
      <router-link to="/staff" class="solid-button">ПЕРСОНАЛ</router-link>
      <button class="solid-button">БІБЛІОТЕКА</button>
      <button class="solid-button">ЗАПИСАТИСЬ</button>
      <button class="solid-button">УВІЙТИ</button>
    </div>

    <div class="logo animated-text"></div>
    <div class="overlay-text animated-text shake">Гуртожиток<br />№4 УжНУ</div>
    <a href="#" class="cta-button animated-text shake" @click="openSettlement">Поселення</a>
    <div class="overlay-text1 animated-text shake">
      Невід’ємною частиною «Ужгородського<br />
      національного університету» є студентське<br />
      містечко
    </div>
    <div class="overlay-text2 animated-text shake">
      На території студмістечка знаходяться 2<br />
      студентські поліклініки, студентські<br />
      магазини та кафе, спортивні майданчики.
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    openSettlement() {
      
      this.$router.push('/settlement');
    },
    openNewTab() {
      window.open('about:blank', '_blank');
    },
    togglePopup() {
      // your existing code for toggling popup
    },
  },
  
  
};
</script>

<style>
body{
  margin:0;
  padding: 0;
}
.solid{
  width: 100%;
  height: 150px;
  background-color: rgb(215, 209, 209);
  border-bottom: 15px solid #838181;

  position: absolute;
  top:-150px;

  transition: top 1s ease-in-out;
}

.solid-button {
  position: relative;
  background-color: transparent;
  top:10px;
  left:950px;
  border: 1px solid rgb(25, 24, 24);
  border-radius: 50px; /* Add border-radius here */
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  margin: 6px 4px;
  cursor: pointer;
}

.solid:hover{
  top:0;
}

.fullscreen-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("@/assets/ф1.jpg");
  background-size: cover;
  background-position: center;
  display: relative; /* Змінено на relative */
}

.logo {
  width: 70px; /* Змінено на ширину вашого логотипу */
  height: 50px; /* Змінено на висоту вашого логотипу */
  background-image: url("@/assets/лого1.png"); /* Замініть на шлях до вашого логотипу в папці assets */
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 40px; /* Вирівнюйте за висотою із верхнім рядком тексту */
  left: 100px; /* Вирівнюйте за відступом від лівого краю */
}

.overlay-text {
  font-family: "Helious", sans-serif;
  color: rgb(15, 15, 15);
  font-size: 17px;
  font-weight: l;
  position: fixed;
  top: 43px;
  left: 153px;
  text-align: left;
}

.overlay-text1 {
  font-family: "Helious";
  color: rgb(15, 15, 15);
  font-size: 48px;
  font-weight: bolder;
  position: fixed;
  top: 150px;
  left: 100px;
  text-align: left;
}

.overlay-text2 {
  color: rgb(15, 15, 15);
  font-size: 20, 7px;
  font-weight: д;
  position: fixed;
  top: 350px;
  left: 100px;
  text-align: left;
}
.cta-button {
  background-color: transparent;
  color: rgb(25, 24, 24);
  border: 1px solid rgb(25, 24, 24);
  border-radius: 50px; /* Заокруглення рамки */
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 45px;
  margin: 4px 2px;
  cursor: pointer;
  position: fixed;
  top: 600px; /* Вирівнюйте за висотою */
  left: 100px; /* Вирівнюйте за відступом від лівого краю */
}

.fullscreen-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/ф1.jpg");
  background-size: cover;
  background-position: center;
  z-index: -1; /* Ensure the pseudo-element is behind other content */
  animation: shake 3s ease-in-out forwards, fadeInBackground 1s 2s forwards;
}

@keyframes backgroundColorChange {
  from {
    background-color: #987e7e;
  }
  to {
    background-color: #2a2a2a;
  }
}
.animated-text {
  opacity: 0;
  transform: translateY(1000px);
  animation: fadeInUp 0.5s 1s forwards, slideIn 1s 1.5s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(1000px);
  }
  to {
    opacity: 1;
    transform: translateY(1000);
  }
}

@keyframes slideIn {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-20px);
  }
  50% {
    transform: translateX(20px);
  }
  75% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fadeInBackground {
  from {
    background-color: #1a1a1a;
  }
  to {
    background-color: #2a2a2a;
  }
}
</style>
