<!-- StudentDetails.vue -->
<template>
    <div>
      <h1>Деталі студента</h1>
      <div>
        <p><strong>Прізвище:</strong> {{ student.lastName }}</p>
        <p><strong>Ім'я:</strong> {{ student.name }}</p>
        <!-- Додайте інші дані про студента за потребою -->
      </div>
      <router-link to="/">Назад</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StudentDetails',
    props: ['student'],
  };
  </script>
  