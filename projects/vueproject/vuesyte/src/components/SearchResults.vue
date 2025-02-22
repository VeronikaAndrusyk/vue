<template>
  <div class="search-results">
    <ul>
      <li v-for="student in students" :key="student.id" class="student-item">
        {{ student.firstName }} {{ student.lastName }}, кімната
        {{ student.roomNumber }}, блок {{ student.block }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    students: Array, // Приймаємо масив студентів як вхідні дані
  },
};
</script>

<style scoped>
.search-results {
  position: absolute;
  width: 300px; 
  max-height: 200px;
  overflow-y: hidden; 
  background-color: #ffffff;
  border: 2px solid #ccc; 
  border-radius: 3px; 
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  padding: 5px; 
  z-index: 1; 
  top: 100%; 
  color: black;
}

.search-results li {
  list-style: none;
  margin: 2px 0;
}

.search-results ul {
  padding: 0px; 
  list-style: none; 
}
.student-item {
  padding-left: 5px; /* Внутрішній відступ зліва */
  padding-right: 5px;

}
</style>
