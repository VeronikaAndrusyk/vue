<template>
  <div id="app">
    <NavigationPanel /> <!-- Додайте компонент навігаційної панелі -->
    <ContactForm />
    <router-view /> <!-- Відображення контенту сторінки -->
    <div class="icons-container">
      <!-- ... (your existing icons) ... -->
      
    </div>
    <Contact-form />
  </div>
</template>


<script>
import NavigationPanel from "@/components/NavigationPanel.vue"; // Шлях до вашого компонента
// eslint-disable-next-line no-unused-vars
import ContactForm from "@/components/ContactForm.vue";

export default {
   
  components: {
    NavigationPanel, // Зареєструйте компонент
    ContactForm
  }
};
</script>
