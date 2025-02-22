<template>
  <div>
    <!-- Background image -->
    <img src="@/assets/L1.png" alt="Description of the image" />

    <!-- Search field and button -->
    <div class="search-container">
      <!--/*<input type="text" v-model="searchQuery" placeholder="Пошук кімнат" /> -->
     <!-- <button @click="search">Знайти</button> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Style for the search container */
.search-container {
  position: absolute;
  top: 5%; /* Adjust this value based on your layout */
  left: 50%; /* Adjust this value based on your layout */
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Style for the search input and button */
input[type="text"] {
  width: 400px; 
  height: 30px;
  padding: 8px;
  margin-right: 8px;
  border-radius: 50px;
  border:3px;
}

button {
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 50px;
  border:3px;
  height: 30px;
}
</style>
