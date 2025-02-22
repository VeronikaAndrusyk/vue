<!-- eslint-disable vue/no-dupe-keys -->
<template>
  <nav class="navigation-panel">
    <ul class="navigation-list">
      <li class="navigation-item">
        <img src="@/assets/UzNU_logo.png" alt="Логотип" class="logo" />
      </li>
      <ContactForm ref="contactForm" />
      <li class="navigation-item search-box">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Пошук"
          class="search-input"
        />
        <search-results
          v-if="showRecentStudents || searchQuery"
          :students="filteredStudents"
        />
      </li>
      <li class="navigation-item">
        <router-link to="/">Головна</router-link>
      </li>
      <li class="navigation-item">
        <router-link to="/about">Про нас</router-link>
      </li>
      <li class="navigation-item">
        <router-link to="/contact">Контакти</router-link>
      </li>
    </ul>
    <div class="icons-container">
      <img
        src="https://cdn-icons-png.flaticon.com/128/3917/3917698.png"
        alt="Icon 1"
        class="icon"
        @click="showAddStudentForm = true"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/3917/3917292.png"
        alt="Icon 2"
        class="icon"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/3917/3917361.png"
        alt="Icon 3"
        class="icon"
        @click="openContactForm"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/3917/3917567.png"
        alt="Icon 4"
        class="icon"
      />
      <div
        class="icon-dropdown"
        @mouseover="showIconDropdown = true"
        @mouseleave="hideIconDropdown = false"
        v-if="showIconDropdown"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/3916/3916864.png"
          alt="Icon 5"
          class="icon"
        />
        <div class="dropdown-content" v-if="showIconDropdown">
          <!-- випадаючі вікна -->
          <p>This is the dropdown content.</p>
          <p>You can add more content here.</p>
        </div>
      </div>
      <div v-if="showAddStudentForm" class="form-container">
        <form @submit.prevent="addStudent" class="add-student-form">
          <input
            v-model="newStudent.firstName"
            placeholder="Ім'я"
            class="form-input"
          />
          <input
            v-model="newStudent.lastName"
            placeholder="Прізвище"
            class="form-input"
          />
          <input
            v-model="newStudent.roomNumber"
            placeholder="Номер кімнати"
            class="form-input"
          />
          <button type="submit" class="form-button">Додати студента</button>
        </form>
      </div>
     
    </div>
    <add-student-form @add="addStudentToList" />
  </nav>
</template>

<script>
import SearchResults from "./SearchResults.vue"; 
import ContactForm from "@/components/ContactForm.vue";
import AddStudentForm from "@/components/AddStudentForm.vue";

export default {
  components: {
    SearchResults, 
    ContactForm,
    AddStudentForm,
  },
  data() {
    return {
      students: [
        {
          id: 1,
          firstName: "Вероніка",
          lastName: "Андрусик",
          roomNumber: "107/4",
          block: "А",
        },
        {
          id: 2,
          firstName: "Руслана",
          lastName: "Новікова",
          roomNumber: "107/4",
          block: "А",
        },
        {
          id: 3,
          firstName: "Марія",
          lastName: "Ромочівська",
          roomNumber: "105/3",
          block: "А",
        },
        {
          id: 4,
          firstName: "Артур",
          lastName: "Дзьовбак",
          roomNumber: "84/3",
          block: "А",
        },
        {
          id: 5,
          firstName: "Віктор",
          lastName: "Півкач",
          roomNumber: "82/4",
          block: "А",
        },
        {
          id: 6,
          firstName: "Ярослав",
          lastName: "Кириленко",
          roomNumber: "84/4",
          block: "А",
        },
        {
          id: 7,
          firstName: "Андрій",
          lastName: "Вогар",
          roomNumber: "82/4",
          block: "А",
        },
        {
          id: 8,
          firstName: "Артем",
          lastName: "Шимон",
          roomNumber: "84/4",
          block: "А",
        },
        {
          id: 9,
          firstName: "Катерина",
          lastName: "Філонич",
          roomNumber: "107/4",
          block: "А",
        },
        {
          id: 10,
          firstName: "Прожегач",
          lastName: "Олександра",
          roomNumber: "166/3",
          block: "Б",
        },
      ],
      searchQuery: "",
      showRecentStudents: false,
      showIconDropdown: true,

      showAddStudentForm: false,
      newStudent: {
        firstName: "",
        lastName: "",
        roomNumber: "",
      },
    };
  },
  computed: {
    filteredStudents() {
      const query = this.searchQuery.toLowerCase();
      const filtered = this.students.filter(
        (student) =>
          student.firstName.toLowerCase().includes(query) ||
          student.lastName.toLowerCase().includes(query)
      );
      if (
        this.newStudent.firstName.toLowerCase().includes(query) ||
        this.newStudent.lastName.toLowerCase().includes(query)
      ) {
        filtered.push(this.newStudent);
      }
      return filtered;
    },
  },
  methods: {
    openContactForm() {
      this.$refs.contactForm.openModal();
    },
    addStudent() {
      this.students.push(this.newStudent);
      this.newStudent = {
        firstName: "",
        lastName: "",
        roomNumber: "",
      };
      this.showAddStudentForm = false;
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("students", JSON.stringify(this.students));
    },

    hideIconDropdown() {
     
      setTimeout(() => {
        this.showIconDropdown = false;
      }, 200);
    },
    
  },
};
</script>

<style scoped>
.navigation-panel {
  background-color: rgb(92, 106, 133);
  color: #fff;
  padding: 2px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  position: relative;
}

.navigation-list {
  list-style: none;
  padding: 0;
  display: flex;
}

.navigation-item {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.search-box {
  position: relative;
}

.search-input {
  padding: 5px;
  border: 2px solid #fff; 
  border-radius: 50px;
  background-color: transparent;
  color: #fff;
  outline: none; 
}

.search-input::placeholder {
  color: #ccc; 
}

.logo {
  width: 70px;
  margin-right: 5px;
  padding: 2px;
}
.icon:last-child {
  margin-right: 10px; 
}
.icon {
  width: 20px; 
  height: 20px; 
  margin-right: 10px; 
}
.icons-container {
  position: absolute;
  top: 50%; 
  right: 10px; 
  transform: translateY(-50%);
  display: flex;
}
.navigation-list {
  justify-content: flex-end;
}
.router-link-exact-active {
  font-weight: bold;
}
.icon-dropdown {
  position: relative;
  display: flex;
  align-items: center; 
}
.icon-dropdown:hover .dropdown-content {
  display: block;
}
.icon-dropdown .icon {
  width: 20px; 
  height: 20px;
  margin-right: 10px; 
}
.icon-dropdown .dropdown-content {
  display: none;
  position: absolute;
  width: 150px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  top: 110%;
  left: -140px;
  z-index: 1;
  color: #000;
  line-height: 1;
}
.icons-container .icon:last-child {
  margin-right: 0;
}
.add-student-form {
  display: flex;
  flex-direction: column;

  margin-top: 100%;
  margin-right: 10%;
}

.form-input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-button {
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
}
</style>
