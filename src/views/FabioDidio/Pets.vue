<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pet-list">
    <div class="pet-item" v-for="pet in pets" :key="pet.id" @click="redirectToProfile(pet.id)">
      <img :src="pet.image" :alt="pet.pet_name" />
      <span>{{ pet.pet_name }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      pets: []
    }
  },
  methods: {
    redirectToProfile(petId) {
      this.$router.push(`/pets/${petId}/profile`)
    }
  },
  mounted() {
    axios
      .get('http://localhost:8000/api/pets/adocao')
      .then((response) => {
        this.pets = response.data
      })
      .catch(() => alert('Houve um erro. Entre em contato com a ONG'))
  }
}
</script>

<style scoped>
.pet-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.pet-item {
  border: 2px solid orangered;
  padding: 5px;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pet-item img {
  width: 150px;
  border-radius: 50%;
}

.pet-item span {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}
</style>
