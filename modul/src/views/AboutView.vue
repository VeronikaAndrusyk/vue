<template>
  <div id="app">
    <div v-if="isLoading">Loading ......</div>
    <div v-else>
      <div class="container">
        <div class="left-container">
        <table>
      <thead>
        <tr>
          <th>Прізвище</th>
          <th>Ім'я</th>
          <th>Стать</th>
          <th>Адреса</th>
          <th>Номер телефону мами</th>
          <th>Номер телефону батька</th>
          <th>Група</th>
          <th>Дії</th>
          <th>Деталі</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in (selectedGroup ? filteredItems : getItemsList)" :key="item.id">
          <td>{{ item.lastName }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.motherNumber }}</td>
          <td>{{ item.fatherNumber }}</td>
          <td>{{ item.group }}</td>
          <td>
            <button @click="deleteItem(item.id)">ВИДАЛИТИ</button>
          </td>
          <td>
            <button @click="viewDetails(item)">ПЕРЕГЛЯНУТИ ДЕТАЛІ</button>
          </td>
          
        </tr>
      </tbody>
    </table>
    </div>
      <div class="right-container">
      <div class="search-container">
        <hr />
        <label for="filterGroup">Фільтрувати за групою: </label>
            <select v-model="selectedGroup" id="filterGroup">
            <option value="">Всі</option>
            <option v-for="group in uniqueGroups" :key="group" :value="group">{{ group }}</option>
            </select>
      </div>


      <div v-if="selectedStudent">
            <h2>Деталі студента</h2>
            <div class="student-form">
              <div>
                <label for="lastName">Прізвище</label>
                <input v-model="selectedStudent.lastName" type="text" id="lastName" readonly />
              </div>
              <div>
                <label for="name">Ім'я</label>
                <input v-model="selectedStudent.name" type="text" id="name" />
             </div>
              <div>
                <label for="gender">Стать</label>
                <input v-model="selectedStudent.gender" type="text" id="gender" />
             </div>
              <div>
                <label for="address">Адреса</label>
                <input v-model="selectedStudent.address" type="text" id="address" />
             </div>
              <div>
                <label for="motherNumber">Номер мами</label>
                <input v-model="selectedStudent.motherNumber" type="text" id="motherNumber" />
             </div>
             <div>
               <label for="fatherNumber">Номер  батька</label>
               <input v-model="selectedStudent.fatherNumber" type="text" id="fatherNumber" />
             </div>
             <div>
               <label for="group">Група</label>
               <input v-model="selectedStudent.group" type="text" id="group" />
              </div>
              
              
            </div>
          </div>
      <hr />


    <div class="student-form">
    <div>
      <label for="lastName">Прізвище</label>
      <input v-model="students.lastName" type="text" id="lastName" />
    </div>
    <div>
      <label for="name">Ім'я</label>
      <input v-model="students.name" type="text" id="name" />
    </div>
    <div>
      <label for="gender">Стать</label>
      <input v-model="students.gender" type="text" id="gender" />
    </div>
    <div>
      <label for="address">Адреса</label>
      <input v-model="students.address" type="text" id="address" />
    </div>
    <div>
      <label for="motherNumber">Номер мами</label>
      <input v-model="students.motherNumber" type="text" id="motherNumber" />
    </div>
    <div>
      <label for="fatherNumber">Номер  батька</label>
      <input v-model="students.fatherNumber" type="text" id="fatherNumber" />
    </div>
    <div>
      <label for="group">Група</label>
      <input v-model="students.group" type="text" id="group" />
    </div>
    <button @click="addItem(students)">Add</button>
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
      selectedGroup: ' ',
      selectedStudent: null,
    };
  },
  
  computed: {
    ...mapGetters('students', ['getItemsList', 'isLoading']),
    uniqueGroups() {
      return [...new Set(this.getItemsList.map(item => item.group))];
    },
    filteredItems() {
      return this.selectedGroup
        ? this.getItemsList.filter(item => item.group === this.selectedGroup)
        : this.getItemsList;
    },
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
    
    viewDetails(student) {
      // Set the selected student for viewing
      this.selectedStudent = student;
    },
   
  },
  
};
</script>

<style scoped lang="scss">


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
  margin-top: 20px;
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
