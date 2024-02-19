<template>
  <div v-if="pet">
    <h1>Amigo: {{ pet.name }}</h1>
    <ul>
      <li>Raça: {{ pet.race.name }}</li>
      <li>Espécie: {{ pet.specie.name }}</li>
      <li>IDADE: {{ pet.age }} ANO(S)</li>
      <li>Peso: {{ pet.weight }} KG</li>
      <li>Porte: {{ pet.size }}</li>
    </ul>

    <form class="form" @submit.prevent="handleSubmit">
      <p>Poucos passos para adotar {{ pet.name }}</p>
      <div class="input-form">
        <label>Nome</label>
        <input v-model="name" data-test="input-name"/>
      </div>
       <div class="input-form">
        <label>CPF</label>
        <input v-model="cpf"/>
      </div>
      <div class="input-form">
        <label>Contato</label>
        <input v-model="contact" data-test="input-contact" />
      </div>
      <div class="input-form">
        <label>Email</label>
        <input v-model="email" type="email" data-test="input-email"/>
      </div>
      <div class="input-form">
        <label>Fale um pouco sobre a sua motivação de adotar esse pet:</label>
        <textarea v-model="observations" data-test="textarea-observations" />
      </div>
      <button type="submit" data-test="submit-button">Cadastrar</button>
    </form>
  </div>
</template>


<script>
import PetService from '@/services/PetService'

export default {
  data() {
    return {
      pet: null,
      name: '',
      email: '',
      contact: '',
      observations: '',
      cpf: ''
    }
  },
  methods: {
    handleSubmit() {
      PetService.adoptPet({
        name: this.name,
        email: this.email,
        contact: this.contact,
        observations: this.observations,
        pet_id:  this.$route.params.id,
        cpf: this.cpf
      })
        .then(() => {
          alert('Cadastrado com sucesso')
        })
        .catch(() => {
          alert('Erro ao tentar realizar a adocao')
        })
    }
  },
  mounted() {
    const id = this.$route.params.id
    PetService.getOnePet(id).then((data) => {
      this.pet = data
    })
  }
}
</script>

  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .card {
    background-color: #ffff;
    padding: 20px 60px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 15px #f5a046;
    color: #f5a046;
  }
  .card1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  padding: 20px 60px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 15px #4CAF50;  
  color: #f5a046;
}
  
  .pet-photo {
    width: 100%;
    max-height: 400px; 
    object-fit: cover; 
    border-radius: 10px;
    margin-bottom: 20px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .form-input {
    width: 100%;
    padding: 10px 60px;
    margin: 10px 0;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .input-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  button {
    background-color: #ff4081;
    color: white;
    padding: 0px 100px;
    border: #f5a046 solid;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3498db;
  }
  </style>
  