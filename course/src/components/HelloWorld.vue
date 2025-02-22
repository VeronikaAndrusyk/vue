<template>
  <div class="hello">
    <div class="background-container">
      <img :src="currentBackground" alt="Background Image" class="background-image" />
      <div v-if="currentBackgroundIndex === 1" class="text-overlay">
        <p class="group-text">THomas Larson Group</p>
        <p class="help-text">Дозвольте нам допомогти вам зробити цей крок.</p>
        <div class="buttons-container">
          <button v-for="(button, index) in buttons" :key="index" @click="changeBackground(button.id)">
            {{ button.label }}
          </button>
        </div>
      </div>

      <!-- Second background image overlay -->
      <div v-if="currentBackgroundIndex === 2" class="text1-overlay">
        <p class="weHave-text">У нас є все необхідне, щоб запропонувати вам найкращу пропозицію для вашого ідеального будинку.</p>
        <div class="button-started">
          <button @click="changeBackground(3)">Почати роботу</button>
        </div>
      </div>

      <!-- Third background image overlay -->
      <div v-if="currentBackgroundIndex === 3" class="text2-overlay">
        <p class="address-text">14 Milena Grove</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentBackgroundIndex: 1,
      buttons: [
        { id: 1, label: 'Вкажіть свій будинок' },
        { id: 2, label: 'Купити житло' },
        // Add other buttons as needed
      ],
      
    };
  },
  computed: {
    currentBackground() {
      return require(`@/assets/${this.currentBackgroundIndex}.png`);
    },
  },
  methods: {
    changeBackground(buttonId) {
      this.currentBackgroundIndex = buttonId;
    },
  },
  mounted() {
    setInterval(() => {
      // Rotate through background images every 5 seconds
      this.currentBackgroundIndex = (this.currentBackgroundIndex % 7) + 1;
    }, 5000);
  },
};
</script>

<style scoped lang="scss">
.text-overlay {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: white;
  text-align: center;
}

.text1-overlay {
  left: 0;
  transform: translate(0, -50%);
  font-size: 12px;
  color: #767676;
  text-align: left;
  padding: 20px;

  .weHave-text {
    color: #767676;
    font-size: 36px;
  }
}

.text2-overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 20px;
  font-size: 24px;
  color: #767676;
}

.group-text,
.help-text {
  padding: 60px;
  font-size: 44px;
}

.buttons-container {
  padding: 10px;
}

.buttons-container button {
  margin-right: 90px;
  background-color: transparent;
  border: 2px solid #fff;
  color: white;
  font-size: 24px;
  padding: 10px 20px;
  cursor: pointer;
}

.button-started button {
  background-color: transparent;
  border: 2px solid #fff;
  color: white;
  font-size: 24px;
  padding: 10px 20px;
  cursor: pointer;
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.background-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hello {
  position: relative;
}
</style>

