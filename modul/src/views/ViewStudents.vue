<template>
  <div class="view-form">
    <div v-if="studentData">
      <div>
        <label for="lastName">Прізвище</label>
        <div>{{ studentData.lastName }}</div>
      </div>
      <!-- Add similar sections for other properties -->
    </div>
    <div v-else>
      <p>No student data available</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['studentData'],
  mounted() {
    console.log('studentData:', this.studentData);
  },
};
</script>

<style scoped>
/* Styles for your edit form here */
</style>
