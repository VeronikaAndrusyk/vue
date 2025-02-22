<!-- eslint-disable vue/multi-word-component-names -->
<!-- Navbar.vue -->
<template>
    <div class="navbar">
      <!-- Зображення UzNU_logo.png зліва від поля пошуку та тексту Home та About -->
      <div class="logo-and-search">
        <img src="@/assets/UzNU_logo.png" alt="UzNU Logo" class="logo" />
        
        <img src="https://cdn-icons-png.flaticon.com/128/3917/3917132.png" alt="" class="search-icon" />
        <div class="search-container">
          <input type="text" placeholder="Search " class="search-input" />
        </div>
      </div>

      <div>
    <input type="text" v-model="searchTerm" @input="searchStudents" placeholder="Пошук студентів" />
    
    <!-- Віпадаюче вікно з результатами пошуку -->
    <div v-if="isDropdownOpen" class="dropdown">
      <ul>
        <li v-for="(result, index) in searchResults" :key="index">
          {{ result.firstName }} {{ result.lastName }} - Кімната {{ result.roomNumber }}
        </li>
      </ul>
    </div>
  </div>
      

      <span class="nav-text-small">Home</span>
      <span class="nav-text-small">About</span>
    
      <img src="https://cdn-icons-png.flaticon.com/128/5529/5529142.png" alt="" class="girl-icon" />
      <img src="https://cdn-icons-png.flaticon.com/128/3914/3914694.png" alt="" class="plus-icon" />
      <img src="https://cdn-icons-png.flaticon.com/128/5068/5068759.png" alt="" class="chat-icon" />
      <img src="https://cdn-icons-png.flaticon.com/128/3917/3917240.png" alt="" class="notification-icon" style="margin-right: 5px;" />
      <img src="https://cdn-icons-png.flaticon.com/128/3916/3916903.png" alt="" class="pointer-icon" />
    
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      students: [
        { firstName: 'Руслана', lastName: 'Новікова', roomNumber: '107/4',Block:'A' },
        { firstName: 'Вероніка', lastName: 'Андрусик', roomNumber: '107/4',Block:'A' },
        
      ],
      searchTerm: '', // Термін пошуку
      searchResults: [], // Результати пошуку
      isDropdownOpen: false // Змінна для відображення/приховування випадаючого вікна
    };
  },
  methods: {
    navigateTo(routeName) {
      // Ваша логіка переходу до сторінки
      // Наприклад, ви можете використовувати v-if або v-show, щоб показати/сховати компоненти
      if (routeName === 'home') {
        // Перехід на сторінку Home
      } else if (routeName === 'about') {
        // Перехід на сторінку About
      }
    },
    
     // Метод для виконання пошуку студентів
     searchStudents() {
      // Виконайте пошук студентів в залежності від searchTerm і оновіть searchResults
      this.searchResults = this.students.filter(student => {
        const fullName = `${student.firstName} ${student.lastName}`;
        return fullName.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
      // Відкрийте випадаюче вікно з результатами пошуку
      this.isDropdownOpen = true;
    }

  },
};
</script>

  
  <style scoped>
  /* Збільшуємо розмір шрифта для класу .nav-text-small на 2 рази */
  .nav-text-small {
    font-size: 14px; /* Змініть це значення на бажаний розмір шрифта */
    padding-left: 10px; /* Додаємо відступ 10px зліва до тексту "Home" */
  }
  
  /* Стилі для поля пошуку */
  .search-container {
    display: flex;
    align-items: center;
    border: 1px solid #000; /* Змінюємо товщину рамки */
    border-radius: 16px; /* Заокруглені кути */
    outline: none; /* Видаляємо рамку фокусу після кліку */
    padding: 4px 8px;
    position: relative;
  }
  
  /* Збільшуємо розмір шрифта для класу .search-input на 2 рази та збільшуємо ширину поля пошуку */
  .search-input {
    font-size: 12px; /* Зменшуємо розмір шрифта поля пошуку */
    border: none;
    outline: none; /* Видаляємо рамку фокусу після кліку */
    flex: 2; /* Збільшуємо ширину поля пошуку */
    height: 10px; /* Збільшуємо висоту поля пошуку */
    padding: 4px 8px;
  }
  
  /* Збільшуємо розмір зображення .logo на 2 рази та встановлюємо його ширину та висоту */
  .logo {
    width: 56px; /* Змініть це значення на бажаний розмір зображення */
    height: auto;
  }
  
  /* Вирівнюємо .logo-and-search за розміром і залишаємо простір між лого та полем пошуку */
  .logo-and-search {
    display: flex;
    align-items: center;
    gap: 10px; /* Змініть це значення на бажану відстань між лого та полем пошуку */
  }
  
  /* Вирівнюємо всю навігаційну панель зліва */
  .navbar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%; /* Змініть це значення на бажану ширину навігаційної панелі */
  }
  .search-icon {
  width: 18px; /* Змініть це значення на бажаний розмір для іконки пошуку */
  height: 18px; /* Змініть це значення на бажаний розмір для іконки пошуку */
  margin-right: 1px;
}

.pointer-icon{
  width: 18px; /* Змініть це значення на бажаний розмір для іконки пошуку */
  height: 18px; /* Змініть це значення на бажаний розмір для іконки пошуку */
  margin-left:auto;
}
.notification-icon{
  width: 18px; /* Змініть це значення на бажаний розмір для іконки пошуку */
  height: 18px;
  margin-left: auto;
}
.chat-icon{
  width: 18px; /* Змініть це значення на бажаний розмір для іконки пошуку */
  height: 18px;
  margin-left: auto;
}
.plus-icon{
  width: 18px; /* Змініть це значення на бажаний розмір для іконки пошуку */
  height: 18px;
  margin-left: auto;
} 
.girl-icon{
  width: 18px; /* Змініть це значення на бажаний розмір для іконки пошуку */
  height: 18 px;
  margin-left: 980px;
}
</style>
  
  
  
  
  

  
  