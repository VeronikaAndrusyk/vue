<!-- eslint-disable vue/no-unused-components -->
<template>
  <div>
    <div v-if="isLoading">Loading ......</div>
    <div v-else>
      <div v-for="item in getItemsList" :key="item.id">
        {{ item.name }} - {{ item.lastname }} - {{ item.room }}
        <button @click="deleteItem(item.id)">Delete</button>
      </div>
      <br />

      <div class="search-container">
        <div>
          Ваше ПІБ
          <input v-model="list.name" type="text" />
        </div>
        <div>
          Тип майстра
          <select v-model="list.masterType">
            <option value="Слюсар">Слюсар</option>
            <option value="Сантехнік">Сантехнік</option>
            <option value="Електрик">Електрик</option>
          </select>
        </div>
        <div>
          Опишіть вашу поломку
          <input v-model="list.description" type="text" />
        </div>
        <div>
          Оберіть дату і час
          <flat-pickr v-model="list.dateTime" :config="datePickerConfig"></flat-pickr>
        </div>
        <div>
          Зображення src
          <input v-model="list.room" type="number" />
        </div>
        <button @click="addItem(list)">Add</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Flatpickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Flatpickr,
  },
  data() {
    return {
      list: {
        masterType: "Слюсар", // Значення за замовчуванням
      },
      datePickerConfig: {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
      },
    };
  },
  computed: {
    ...mapGetters("lists", ["getItemsList", "isLoading"]),
  },
  created() {
    this.loadList();
  },
  methods: {
    ...mapActions("lists", [
      "loadList",
      "addItem",
      "deleteItem",
      "updateItem",
      "loadFilteredData",
    ]),
    onAddPrice(item) {
      this.updateItem({
        itemId: item.id,
        data: {
          price: item.price + 100,
        },
      });
    },
  },
};
</script>

<style>
body {
  height: 100vh;
  margin: 0;
  overflow-y: auto;
  background-image: url('@/assets/L1.png');
  background-size: cover; /* Забезпечує повне покриття фонового зображення */
}

.search-container {
  text-align: center;
  margin-top: 300px; /* Зменшено величину margin-top для кращого вигляду */
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.8); /* Прозорий білий фон контейнера */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.list-item {
  margin-bottom: 10px;
}

.background-image {
  z-index: 1;
}



/* Інші стилі за необхідності */
</style>
