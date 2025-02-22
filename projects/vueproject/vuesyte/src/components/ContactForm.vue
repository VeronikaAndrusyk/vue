<template>
    <div v-if="showForm" class="modal-background">
      <div class="modal">
        <span class="close-button" @click="closeForm">X</span>
        <form @submit.prevent="sendRequest">
        <div class="form-group">   
          <label for="firstNameLastName">Ім'я та прізвище:</label>
          <input
            id="firstNameLastName"
            type="text"
            v-model="lastName"
          />
        </div>
          <div class="form-group">
            <label for="service">Оберіть послугу:</label>
            <select id="service" v-model="selectedService">
              <option value="plumber">Сантехнік</option>
              <option value="laundry">Пральня</option>
              <option value="locksmith">Cлюсар</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dateTime">Дата і час:</label>
            <input
              id="dateTime"
              type="datetime-local" 
              v-model="dateTime" 
            />
          </div>
          <div class="form-group">
          <label for="roomNumber">Номер кімнати:</label>
          <input
            id="roomNumber"
            type="text"
            v-model="roomNumber"
          />
        </div>
          <div class="form-group">
            <label for="message">Повідомлення:</label>
            <textarea id="message" v-model="message"></textarea>
          </div>
          
          <button type="submit">Записатись</button>
        </form>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        showForm: false,
        selectedService: "plumber", 
        message: "",
      };
    },
    methods: {

    openModal() {
      this.showForm = true;
    },
      closeForm() {
        this.showForm = false;
      },
      sendRequest() {
        // Handle sending the request here (e.g., make an API call).
        // Reset form values if needed.
        this.closeForm();
      },
    },
  };
  </script>
  
  <style scoped>

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  display: none;
  position: fixed;
  top: 20%;
  left: 40%;
  width: 20%;
  height:60%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color:#000000;
}
.modal {
  background-color: #cacaca;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.modal-content {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  max-width: 200px; /* Adjust width as needed */
}
.form-group {
  transform: skewX(-10deg); /* Adjust the degree of skew as needed */
  margin: 10px 0; /* Add margin to separate form elements */
  border-radius: 10px; /* Round up the corners */
  padding: 10px; /* Add padding to the form group */
  font-weight: bold; /* Make the font bolder */
}

.form-group label {
  font-weight: bold; /* Make labels bolder */
  color:#000000;
  font-weight: bold;
  margin-bottom: 6px;
}

.form-group input[type="text"],
.form-group input[type="datetime-local"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-weight: bold;
  margin: 6px 0; /* Add space between input and next label */
}
.form-group select,
.form-group textarea,
.form-group input[type="datetime-local"] {
  width: 100%; /* Make the inputs fill the entire width */
  padding: 8px; /* Add padding to the inputs */
  border: 1px solid #ccc; /* Add a border to the inputs */
  border-radius: 5px; /* Round up the input corners */
  font-weight: bold; /* Make the input font bolder */
  margin: 6px 0; /* Add margin to separate input elements */
}

/* Style the date and time input specifically */
.form-group input[type="datetime-local"] {
  background-color: #ffffff; /* Background color */
  color: #000000; /* Text color */
  font-weight: normal; /* Reset font weight for input */
  border: 1px solid #ccc; /* Border color */
  border-radius: 5px; /* Border radius */
}

button[type="submit"] {
  background-color: #4caf50; /* Green background color for the submit button */
  color: rgb(0, 0, 0); /* White text color */
  padding: 10px 20px; /* Padding for the button */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold; /* Make the button text bold */
  margin-top: 10px; /* Add margin between the button and inputs */
}


/* Add other modal styles as needed */

</style>

  