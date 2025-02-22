<template>
   
  <div class="background-image">
    
    <div class="overlay-text1 animated-text shake">
      Невід’ємною частиною «Ужгородського<br />
      національного університету» є студентське<br />
      містечко
    </div>
    <div class="overlay-text2 animated-text shake">
      На території студмістечка знаходяться 2
      студентські поліклініки, <br /> студентські
      магазини та кафе, спортивні майданчики.
    </div>
    <button class="btn" @click="openSettlementInNewTab">Поселення</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    openSettlementInNewTab() {
      window.open("/settlement", "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}
nav {
  position: absolute;
  top: 0;
  left: -470px;
  width: 100%;
  padding-top: 30px; /* Залиште верхній відступ */
  padding-right: -400px; /* Змініть значення цього відступу за потребою */
  color: transparent;
  z-index: 2; /* Ensure the navigation is above the background */
  font-size: 18px;
  text-decoration: none;
  color: #ffffff;
}
nav a {
  font-weight: bold;
  color: #ffffff;

  &.router-link-exact-active {
    color: #b9b142;
  }
}

.logo {
  width: 70px; /* Змінено на ширину вашого логотипу */
  height: 50px; /* Змінено на висоту вашого логотипу */
  background-image: url("@/assets/лого1.png"); /* Замініть на шлях до вашого логотипу в папці assets */
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 20px; /* Вирівнюйте за висотою із верхнім рядком тексту */
  left: 50px; /* Вирівнюйте за відступом від лівого краю */
}
.background-image {
  background-image: url("@/assets/11.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(0, 0, 0);
  font-size: 24px;
  text-align: left;
}
.overlay-text1 {
  font-family: "Helious";
  color: rgb(255, 252, 252);
  font-size: 48px;
  font-weight: bolder;
  position: fixed;
  top: 180px;
  left: 50px;
  text-align: left;
}

.overlay-text2 {
  color: rgb(255, 250, 250);
  font-size:  19px;
  font-weight: д;
  position: fixed;
  top: 400px;
  left: 50px;
  text-align: left;
}
.overlay-text {
  font-family: "Helious", sans-serif;
  color: rgb(255, 248, 248);
  font-size: 15px;
  font-weight: l;
  position: fixed;
  top: 20px;
  left: 104px;
  text-align: left;
}
.btn {
  background-color: transparent;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  position: fixed;
  top: 600px;
  left: 100px;
}

.overlay-text {
  animation: bounce 1s infinite;
}

@keyframes pulse {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1.8);
  }
}
.btn {
  animation: pulse 1s infinite alternate;
  animation-fill-mode: forwards; /* Ensure styles persist after animation */
}
@keyframes fadeIn {
  from {
    opacity: 1;
  }
  to {
    opacity: 3;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Apply animations to your text elements */
.logo,
.overlay-text,
.overlay-text1,
.overlay-text2 {
  animation: fadeIn 2s ease-out;
}

.overlay-text1 {
  animation: slideInLeft 1s ease-out;
}

.overlay-text2 {
  animation: slideInUp 2s ease-out;
}
</style>
