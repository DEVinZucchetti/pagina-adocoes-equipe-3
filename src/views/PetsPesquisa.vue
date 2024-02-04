<template>
    <div>
      <h1>Pets List</h1>
      <table>
        <!-- Renderizar la lista de pets -->
        <tr v-for="pet in pets" :key="pet.id">
          <td>{{ pet.pet_name }}</td>
          <td>{{ pet.age }}</td>
          <td>{{ pet.size }}</td>
          <td>{{ pet.weight }}</td>
          <td>{{ pet.specie.name }}</td>
          <td>{{ pet.race.name }}</td>
        </tr>
      </table>
  
      <!-- Filtros -->
      <div>
        <!-- Filtro por nombre -->
        <label for="name">Name:</label>
        <input type="text" v-model="filters.name" @input="fetchPets" />
         <!-- Filtro por age -->
         <label for="age">Age:</label>
        <input type="text" v-model="filters.age" @input="fetchPets" />
        <!-- Filtro por portE -->
        <label for="size">size:</label>
        <input type="text" v-model="filters.size" @input="fetchPets" />
        <!-- Filtro por peso -->
        <label for="weight">weight:</label>
        <input type="text" v-model="filters.weight" @input="fetchPets" />
        <!-- Filtro por nombre de especie -->
      <label for="specie_name">Specie Name:</label>
      <input type="text" v-model="filters.specie_name" @input="fetchPets" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pets: [],
        filters: {
          name: '', 
          age: '',
          size: '',
          weight: '',
          specie_name: '',
        },
      };
    },
    mounted() {
      this.fetchPets(); // Obtener la lista completa de pets al cargar el componente
    },
    methods: {
      // Método para obtener la lista de pets según los filtros
      fetchPets() {
        axios
          .get('http://127.0.0.1:8000/api/pets', {
            params: this.filters, // Enviar los filtros como parámetros en la solicitud
          })
          .then((response) => {
            this.pets = response.data;
          })
          .catch(() => {
            alert('Hubo un error. Por favor, contacta a la ONG.');
          });
      },
    },
  };
  </script>
  
  <style>
  /* Estilos según sea necesario */
  </style>
  