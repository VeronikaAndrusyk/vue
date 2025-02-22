<template>
  <div id="app">
    <div v-if="isLoading">Loading ......</div>
    <div v-else>
      <div v-for="item in getItemsList" :key="item.id">
        {{ item.firstName }}
        <button @click="deleteItem(item.id)">Delete</button>
      </div>
      <br />

      <div>
        <div>
          title
          <input v-model="students.title" type="text" />
        </div>
        <div>
          price
          <input v-model="students.course" type="number" />
        </div>
        <div>
          image src
          <input v-model="students.info" type="text" />
        </div>
        <button @click="addItem(students)">Add</button>
      </div>

      <hr />

      <div class="search-container">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by title"
          @input="handleSearchInput"
          @focus="showDropdown = true"
          @blur="handleSearchBlur"
        />
        <button @click="searchItems">Search</button>

        <!-- Dropdown for search results -->
        <div v-if="showDropdown && (searchResults.length > 0 || filteredStudents.length > 0)" class="dropdown">
          <div v-if="searchResults.length > 0">
            <div v-for="result in searchResults" :key="result.id" @click="selectItem(result)">
              {{ result.firstName }}
            </div>
          </div>
          <div v-if="filteredStudents.length > 0">
            <div v-for="student in filteredStudents" :key="student.id" @click="selectItem(student)">
              {{ student.firstName }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HomeView',
  data() {
    return {
      students: {},
      searchQuery: '',
      searchResults: [],
      showDropdown: true,
      filteredStudents: [],
    };
  },
  computed: {
    ...mapGetters('students', ['getItemsList', 'isLoading']),
  },
  created() {
    this.loadList();
  },
  methods: {
    ...mapActions('students', [
      'loadList',
      'addItem',
      'deleteItem',
      'updateItem',
      'loadFilteredData',
    ]),
    onAddPrice(item) {
      this.updateItem({
        itemId: item.id,
        data: {
          price: item.price + 100,
        },
      });
    },
    searchItems() {
      if (this.searchQuery.trim() === '') {
        this.searchResults = [];
        this.showDropdown = false;
        this.filteredStudents = [];
        return;
      }

      // Фільтрація студентів за ім'ям
      this.filteredStudents = this.getItemsList.filter((student) =>
        student.firstName && student.firstName.toLowerCase().includes(this.searchQuery.trim().toLowerCase())
      );

      this.showDropdown = true;
    },
    handleSearchInput() {
      if (this.searchQuery.trim() === '') {
        this.searchResults = [];
        this.showDropdown = false;
      }
    },
    handleSearchBlur() {
      // Delay hiding the dropdown to handle clicks on the dropdown itself
      setTimeout(() => {
        this.showDropdown = false;
      }, 200);
    },
    selectItem(item) {
      console.log('Selected item:', item);
      this.searchQuery = '';
      this.showDropdown = false;
    },
  },
};
</script>

<style scoped lang="scss">
/* Your existing styles */

thead {
  background-color: #f2f2f2;
}

th {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

/* Стилі для рядків таблиці */
tbody {
  font-size: 14px;
  border:3px;
}

td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

/* Стилі для кнопки "Delete" */
button {
  background-color: #dc3545; /* Червоний колір Bootstrap */
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #c82333; /* Темно-червоний колір Bootstrap при наведенні */
}

</style>
