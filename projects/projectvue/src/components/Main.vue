<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <button @click="openWindow" class="external-button">
      <i
        class="fa fa-window-open"
        style="
          width: 40px;
          height: 40px;
          background-color: #ffffff;
          color: #000000;
          font-size: 40px;
          border: 0cap;
          margin-left: auto; 
        "
        >≣</i
      >
    </button>
  </div>
  <div class="main">
    <h1>Welcome to the Main Page</h1>
    <p>This is the main content of the page.</p>

    <!-- Кнопка для відкриття спливаючого вікна -->
    

    <!-- Використання компонента Window.vue -->
    <Window ref="window">
      <!-- Вміст спливаючого вікна, включаючи ваше лого -->
      <img src="@/assets/UzNU_logo.png" alt="Logo" />
      <p>This is the window content.</p>
    </Window>

    <img src="@/assets/campus.jpg" alt="" />
  </div>
</template>

<script>
import Window from "@/components/Window.vue";

export default {
  components: {
    Window,
  },
  methods: {
    openWindow() {
      this.$refs.window.openWindow();
    },
  },
};
</script>

<style scoped>
/* Стилі для компонента Main.vue */
.main {
  text-align: center;
  padding: 20px;
  width: 80%;
  margin: 0 auto;

}
.external-button {
  margin: 0px; /* Додаємо margin для кнопки ззовні "main" */
}
img {
  max-width: 100%; /* Робить фото адаптивним до ширини контейнера */
  height: auto; /* Забезпечує коректне співвідношення сторін фото */
}
</style>
