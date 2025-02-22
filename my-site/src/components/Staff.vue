<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="fullscreen-image1">
            <div class="page-wrapper">
        <h1 class="title">Працівники гуртожитку №4</h1>
        <div class="image-scroll">
          
          <div class="image-container">
            <img v-for="(image, index) in images" :key="index" :src="image" class="image-item" />
          </div>
        </div>
  
        <table class="contact-table" style="margin-top: 50px;">
          <tr>
            <th>№ гуртожитка</th>
            <th>Адреса</th>
            <th>Номер прохідної</th>
          </tr>
          <tr>
            <td>Гуртожиток №1</td>
            <td>м. Ужгород, вул. Митна 27</td>
            <td>64-34-67</td>
          </tr>
          <tr>
            <td>Гуртожиток №2</td>
            <td>м. Ужгород, вул. Студентська набережна, 4 </td>
            <td>64-36-97</td>
          </tr>
          <tr>
            <td>Гуртожиток №3</td>
            <td>м. Ужгород, вул. Студентська набережна, 2</td>
            <td>64-33-73</td>
          </tr>
          <tr>
            <td>Гуртожиток №4</td>
            <td>м. Ужгород, вул. Університетська, 12</td>
            <td>64-26-69</td>
          </tr>
          <tr>
            <td>Гуртожиток №5</td>
            <td>м. Ужгород, вул. Університетська, 12 А</td>
            <td>64-35-72</td>
          </tr>
          <!-- Add more rows if needed -->
        </table>
      </div>
        </div>
      
      
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        images: [
          require('@/assets/Директор студмістечка КЕПИЧ Василь Георгійович.png'),
          require('@/assets/Комендант гуртожитку №4 ТАНЦЮРА Галина Григорівна.png'),
          require('@/assets/Комендант гуртожитку №4 БОБИК Юрій Юрійович.png'),
          require('@/assets/Баран Олександр Іванович - голова ППО студентів УжНУ.png')
        ]
      };
    }
  };
  </script>
  
  <style>
  .fullscreen-image1 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url("@/assets/фон2.jpg");
    background-size: cover;
    background-position: center;
    display: relative; /* Змінено на relative */
  }
  .page-wrapper {
    height: 100vh;
    overflow-y: auto; /* змінено з 'hidden' на 'auto' */
    background-color: #767e8590;
  }
  
  /* Видалення білої рамки навколо сторінки */
  html,
  body {
    margin: 0;
    padding: 0;
  }
  
  .image-scroll {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 30px;
    margin-top: 50px;
  }
  
  .image-container {
    display: flex;
  }
  
  .image-item {
    flex-shrink: 0;
    height: 50vh;
    width: auto;
    object-fit: cover;
    margin-right: 30px;
  }
  
  .image-item:first-child {
    margin-left: 0;
  }
  
  .image-item:last-child {
    margin-right: 0;
  }
  
  /* Приховує бігунок прокрутки */
  .image-scroll::-webkit-scrollbar {
    display: none;
  }
  
  h1 {
    text-align: center;
    margin-top: 20px;
    color: #000;
  }
  
  body {
    background-color: #a3c2d91d;
  }
  
  .contact-table {
    width: 70%;
    margin: 50px auto;
    border-collapse: collapse;
  }
  
  .contact-table th,
  .contact-table td {
    border: 3px solid #232222;
    padding: 8px;
  }
  
  .contact-table th {
    background-color: #414141;
    color: #fff;
  }
  
  .contact-table tr {
    background-color: #fff; /* Змінено з #ffffff на #fff */
  }
  
  .contact-table tr:nth-child(even) {
    background-color: #fff;
  }
  
  .contact-table tr:hover {
    background-color: #fff;
  }
  </style>
  
  
  