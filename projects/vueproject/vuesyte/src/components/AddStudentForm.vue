<template>
    <div></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newStudent: {
          firstName: '',
          lastName: '',
          roomNumber: ''
        }
      };
    },
    methods: {
      addStudent() {
        this.$emit('add', this.newStudent); // Emit event with the new student data
        this.newStudent = { // Reset the form
          firstName: '',
          lastName: '',
          roomNumber: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your component styles here */
  </style>
  