<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <div class="background">
        <div class="logo animated-text"></div>
        <router-link to="/rooms">
        <button class="custom-button1">
          Переглянути <br />
          кімнати
        </button>
      </router-link>
      <router-link to="/list">
        <button class="custom-button2">
          Записатись до <br />
          сантехніка
        </button>
      </router-link>
      <router-link to="/list">
        <button class="custom-button3">
          Записатись до <br />
          слюсара
        </button>
      </router-link>
      <router-link to="/list">
        <button class="custom-button4">
          Записатись у <br />
          пральну
        </button>
      </router-link>
      <router-link to="/list">
        <button class="custom-button5">
          Записатись до <br />
          електрика
        </button>
      </router-link>
       
        <h1>
          За високими стандартами <br />
          енергоефективності:<br />
          в УжНУ триває масштабна модернізація <br />
          будівель за проєктом із NEFCO
        </h1>
        <img class="background-photo" src="@/assets/22.png" alt="" />
  
        
  
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  
  
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
    color: #ffffff;
  }
  nav a {
    font-weight: bold;
    color: #ffffff;
  
    &.router-link-exact-active {
      color: #b9b142;
    }
  }
  
  .background {
    position: relative;
  }
  .background-photo1 {
    position: relative;
    width:100%;
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
  .right-half {
    width: 50%;
    float: left;
  }
  
  h1 {
    position: relative; /* Add this line to set the position to relative */
    z-index: 1;
    margin-top: 320px;
    text-align: left;
    left: 50px;
    position: absolute;
    font-size: 37px;
    line-height: 1.5;
    font-family: "Caveat", cursive; /* Updated font-family to Caveat */
    color: #ffffff;
  }
  .background {
    position: relative;
  }
  .background-photo1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: -1%;
  }
  .additional-background-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1; /* Set a lower z-index to place it behind the existing background photo */
  }
  .additional-background-photo {
    opacity: 0.5; /* Adjust the opacity if needed */
    /* Add any additional styling for the new background photo */
  }
  .custom-button1,
  .custom-button2,
  .custom-button3,
  .custom-button4,
  .custom-button5 {
    position: absolute;
    top: 10%;
    left: 5%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: white;
    padding: 12px 20px;
    border: 4px solid rgb(217, 204, 22);
    border-radius: 80px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
    animation: pulse 2s infinite, scale 2s infinite;
  }
  
  .custom-button2 {
    left: 16%;
  }
  
  .custom-button3 {
    left: 28%;
  }
  
  .custom-button4 {
    top: 18%;
    left: 11%;
  }
  
  .custom-button5 {
    top: 18%;
    left: 23%;
  }
  
  @keyframes pulse {
    0%,
    100% {
      background-color: transparent;
    }
    50% {
      background-color: rgb(217, 204, 22);
      color: black; /* Змініть колір тексту на відповідний */
    }
  }
  
  @keyframes scale {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
  </style>