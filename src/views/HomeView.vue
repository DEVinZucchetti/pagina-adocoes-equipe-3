<template>
    <div class="albergue-container">
      <div class="card elevation">
        <div class="content">
          <div class="text">
            <h1>Me leva pra Casa</h1>
            <p>
              Em nosso abrigo, oferecemos um lar temporário e amoroso para cães necessitados.
              Trabalhamos para encontrar lares permanentes e amorosos para cada um de nossos amigos peludos.
              Adote hoje e mude uma vida!
            </p>
            <router-link to="pets_adocao">
              <button class="button-action">Adotar</button>
            </router-link>
          </div>
          <div class="image">
            <img src="../assets/imagem_pet.png" alt="Cães no abrigo">
          </div>
        </div>
      </div>
    </div>
    
  </template>
  
  <style scoped>
    .albergue-container {
      max-width: 800px;
      margin: auto;
      text-align: center;
    }
  
    .card {
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
  
    .elevation {
      transition: box-shadow 0.3s;
    }
  
    .elevation:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
  
    .text {
      flex: 1;
      text-align: left;
      padding: 20px;
    }
  
    h1 {
      color: #f5a046;
      font-size: 2em;
      margin-bottom: 20px;
    }
  
    p {
      color: #333;
      font-size: 1.2em;
      margin-bottom: 20px;
    }
  
    button {
      background-color: #ff4081;
      color: white;
      font-size: 1.2em;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    button:hover {
      background-color: #f50057;
    }
  
    .image {
      flex: 1;
      margin-left: 20px;
    }
  
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
  </style>
  