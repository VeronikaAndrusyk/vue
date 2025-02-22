<template>
  <div>
    <div class="search-box">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Пошук"
        class="search-input"
        @input="filterStudents"
        @focus="showRecentStudents = true"
        @blur="showRecentStudents = false"
      />
      <ul v-if="showRecentStudents">
        <li v-for="student in filteredStudents" :key="student.id">
          <router-link :to="{ path: '/students/' + student.id }">
            {{ student.firstName }} {{ student.lastName }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [/* Your student data here */],
      searchQuery: '',
      showRecentStudents: false,
    };
  },
  computed: {
    filteredStudents() {
      const query = this.searchQuery.toLowerCase();
      return this.students.filter(student =>
        student.firstName.toLowerCase().includes(query) ||
        student.lastName.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    filterStudents() {
      // Filtering logic here, if required
    },
  },
};
</script>
