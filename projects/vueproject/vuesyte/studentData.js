// studentData.js

// Функція для завантаження списку студентів із LocalStorage
export function loadStudents() {
    const studentsData = localStorage.getItem('students');
    return studentsData ? JSON.parse(studentsData) : [];
  }
  
  // Функція для збереження списку студентів у LocalStorage
  export function saveStudents(students) {
    localStorage.setItem('students', JSON.stringify(students));
  }
  