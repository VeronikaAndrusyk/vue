<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="popup">
    <transition name="slide-in-left">
      <div v-if="isOpen" class="popup-content">
        <slot></slot>
        <button @click="closeWindow">Close</button>
      </div>
    </transition>
  </div>
</template>

<script>
// const name = localStorage.getItem("name");

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openWindow() {
      this.isOpen = true;
    },
    closeWindow() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  bottom: 0;
  left: 0px; /* Зсув вікна від лівого краю на 40px */
  width: 20%; /* Ширина вікна (змініть за потребою) */
  text-align: center;
  background-color: #fff;
  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.2);
}

.popup-content {
  background-color: #fff;
  padding: 0px;
  border-radius: 5px;
  box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.2);
  /* Змініть висоту вікна від нижньої частини екрану */
  height: calc(100vh - 96px); /* 60px - оцінкова висота навігаційної панелі */
  overflow-y: auto; /* Додайте прокрутку, якщо контент великий */
}

.slide-in-left-enter-active,
.slide-in-left-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-in-left-enter,
.slide-in-left-leave-to {
  transform: translateX(-100%);
}
</style>
