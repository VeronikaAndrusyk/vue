<template>
    <div>
      <h2>Student Details</h2>
      <div>
        <p><strong>First Name:</strong> {{ student.firstName }}</p>
        <p><strong>Last Name:</strong> {{ student.lastName }}</p>
        <p><strong>Room Number:</strong> {{ student.roomNumber }}</p>
        <!-- Add more details here as needed -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StudentDetail',
    props: {
      student: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  