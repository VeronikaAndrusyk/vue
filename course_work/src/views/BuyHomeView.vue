<template>
    <div class="about">
      <h1>This is an buy page</h1>
    </div>
    <form>
  <label for="housing_median_age">Медіанний вік житла:</label>
  <input type="text" id="housing_median_age" v-model="housingMedianAge">
  
  <label for="total_rooms">Загальна кількість кімнат:</label>
  <input type="text" id="total_rooms" v-model="totalRooms">
  
  <label for="total_bedrooms">Загальна кількість спалень:</label>
  <input type="text" id="total_bedrooms" v-model="totalBedrooms">
  
  <label for="population">Кількість населення:</label>
  <input type="text" id="population" v-model="population">
  
  <label for="households">Кількість домогосподарств:</label>
  <input type="text" id="households" v-model="households">
  
  <label for="median_income">Медіанний дохід:</label>
  <input type="text" id="median_income" v-model="medianIncome">
  
  <button @click.prevent="predictPrice">Прогнозувати ціну</button>
</form>

  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    data() {
        return {
    housingMedianAge: '',
    totalRooms: '',
    totalBedrooms: '',
    population: '',
    households: '',
    medianIncome: '',
    predictedPrice: null,
  };
    },
    methods: {
        async predictPrice() {
  console.log('Starting prediction...');
  try {
    const response = await api.post('/predict', {
      housing_median_age: this.housingMedianAge,
      total_rooms: this.totalRooms,
      total_bedrooms: this.totalBedrooms,
      population: this.population,
      households: this.households,
      median_income: this.medianIncome,
    });
    this.predictedPrice = response.data.predicted_price; // оновлення властивості predictedPrice, а не predicted_price
    console.log('Prediction successful:', this.predictedPrice);
  } catch (error) {
    console.error('Error predicting price:', error);
  }
},

    },
  };
  </script>