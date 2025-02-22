<template>
  <div
    class="background-image-slider"
    :style="{ backgroundImage: `url(${currentImage})` }"
  >
  <!-- Це вміст першого слайду -->
    <div class="content">
      <slot></slot>
      <template v-if="currentIndex === 0">
        <div class="fade-in-from-bottom">
          <h2>THomas Larson Group</h2>
          <h3>Дозвольте нам допомогти вам зробити цей крок.</h3>
          <button class="button1" @click="navigateToSpecifyHouse">Вкажіть свій будинок</button>
          <button class="button2" @click="navigateToBuyHouse">Купити будинок</button>
        </div>
      </template>
    </div>
  <!-- Це вміст другого слайду -->
    <div class="content1">
      <slot></slot>
      <template v-if="currentIndex === 1">
        <div class="fade-in-from-bottom1">
          <p>"У нас є все необхідне, щоб запропонувати вам найкращу пропозицію для вашого ідеального будинку.""</p>
          <button class="button3">Почати</button>
          
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackgroundImageSlider",
  data() {
    return {
      currentIndex: 0,
      images: [
        require("@/assets/photo1.png"),
        require("@/assets/photo2.png"),
        
        
      ],
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  created() {
    this.intervalId = setInterval(this.nextSlide, 10000000); // 6 seconds
  },
  unmounted() {
    clearInterval(this.intervalId);
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  
    navigateToSpecifyHouse() {
      this.$router.push({ name: 'sale' }); // Перехід на сторінку "Вказати свій будинок"
    },
    
    navigateToBuyHouse() {
      this.$router.push({ name: 'buy' }); // Перехід на сторінку "Купити будинок"
    }
  
  },
};
</script>

<style scoped>
.background-image-slider {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
}

/* Це стиль першого слайду */
.content {
  position: absolute; 
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.fade-in-from-bottom {
  animation: fadeInFromBottom 1.5s ease-out;
}
@keyframes fadeInFromBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h3{
  margin-top: 150px;
  font-size: 65px;
}
.button1,.button2 {
  margin: 0 40px;
  padding: 10px 50px;
  background-color: transparent;
  color: white;
  border: 2px solid rgb(207, 204, 204);
  cursor: pointer;
  font-size: 29px;
  font-weight: 400;
  transition: all 0.3s ease;
}
.button1:hover,.button2:hover {
  transform: scale(1.1);
}

/* Це стиль другого слайду */
.content1 {
  position: absolute; 
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: left;
}
.fade-in-from-bottom1 {
  animation: fadeInFromBottom 1.5s ease-out;
}
@keyframes fadeInFromBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
p{
  font-size:44px;
  font-family: Sorts Mill Goudy, serif;
}
.button3 {
  margin: 0 40px;
  padding: 10px 50px;
  background-color: transparent;
  color: white;
  border: 2px solid rgb(207, 204, 204);
  cursor: pointer;
  font-size: 29px;
}

</style>
