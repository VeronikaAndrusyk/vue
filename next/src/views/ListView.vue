<template>
    <div class ="app">
     
      <div v-if="isLoading">Loading ......</div>
      <div v-else>
        <div class="container">
          <div class="left-container">
          <table>
        <thead>
          <tr>
            <th>Прізвище</th>
            <th>Ім'я</th>
            <th>Номер кімнати</th>
            <th>Номер телефону</th>
            <th>Блок</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getItemsList" :key="item.id">
            <td>{{ item.lastName }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.room }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.phoneNumber }}</td>
            <td>{{ item.block }}</td>
            <td>
              <button @click="deleteItem(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
        <div class="right-container">
        <div class="search-container">
          <hr />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Пошук студента"
            @input="handleSearchInput"
            @focus="showDropdown = true"
            @blur="handleSearchBlur"
          />
          <button @click="searchItems">Search</button>
        </div>
        <hr />
          <div class="student-form">
      <div>
        <label for="lastName">Прізвище</label>
        <input v-model="puples.lastName" type="text" id="lastName" />
      </div>
      <div>
        <label for="name">Ім'я</label>
        <input v-model="puples.name" type="text" id="name" />
      </div>
      <div>
        <label for="room">Номер кімнати</label>
        <input v-model="puples.room" type="text" id="address" />
      </div>
      <div>
        <label for="phoneNumber">Номер телефону</label>
        <input v-model="puples.phoneNumber" type="text" id="motherNumber" />
      </div>
      <div>
        <label for="block">Номер блоку</label>
        <input v-model="puples.clock" type="text" id="fatherNumber" />
      </div>
      <button @click="addItem(puples)">Add</button>
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
        puples: {},
        searchQuery: '',
        searchResults: [],
        showDropdown: true,
        filteredStudents: [],
      };
    },
    computed: {
      ...mapGetters('puples', ['getItemsList', 'isLoading']),
    },
    created() {
      this.loadList();
    },
    methods: {
  
      ...mapActions('puples', [
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
  
    },
  };
  </script>
  
  <style scoped lang="scss">
  .app{
    background-color: #767474;
  }
  
  .search-container {
    position: relative;
    margin-top: 20px;
   
  }
  
  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ddd;
    max-height: 150px;
    overflow-y: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  
  .dropdown div {
    padding: 10px;
    cursor: pointer;
  }
  
  .dropdown div:hover {
    background-color: #f0f0f0;
  }
  table {
    width: 70%;
    border-collapse: collapse;
    margin-top: 150px;
    margin-left: 40px;
  }
  
  th, td {
    border: 2px solid #695858;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    background-color: #6adc35;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: #36c823;
  }
  .student-form {
      border: 1px solid #000000;
      border-radius: 10px;
      padding: 15px;
      margin: 15px;
      width: 50%; 
      margin-left: 140px;
      background-color: #d2cdcd;
    }
  
    .student-form div {
      margin-bottom: 10px;
      display: flex;
      flex-direction: line;
      margin: 10px;
    }
  
    .student-form label {
      margin-bottom: 3px;
    }
  
    .student-form input {
      width: 100%;
      padding: 5px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 50px;
      margin-left: 5px;
      
    }
  
    .student-form button {
      background-color: #4caf50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
    }
  
    .student-form button:hover {
      background-color: #45a049;
    }
  .container {
    display: flex;
  }
  
  .left-container {
    
    flex: 1;
    padding-right: 10px; 
  }
  
  .right-container {
    
    flex: 1;
    padding-right: 0px;
  }
  
  </style>
  