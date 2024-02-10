<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main-content">
    <div class="left-content">
      <h1 class="title">Me leva para casa</h1>
      <p class="title-description">Nós cuidamos deles. Agora deixe que eles cuidem de você.</p>
      <p class="title-description">
        Aqui a gente cuida de animais resgatados de áreas evacuadas de Minas Gerais e queremos
        compartilhar todo esse amor com mais pessoas por meio da adoção.
      </p>
      <p class="title-description">
        Ter um animal de estimação traz benefícios para a saúde física e mental. É uma troca de amor
        e carinho que faz bem pra todo mundo. Leve um para casa: cuide dele e deixe que ele cuide de
        você também.
      </p>
      <router-link to=""> <button class="button-action">ADOTAR AGORA</button> </router-link>
    </div>
    <div class="right-content">
      <img src="https://vale.com/documents/d/guest/imagem-dogs01" alt="imagem" class="main-image" />
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 32px;
  color: orangered;
  font-family: Arial, Helvetica, sans-serif;
}
.title-description {
  font-size: 16px;
  text-align: justify;
  font-family: Arial, Helvetica, sans-serif;
}

.main-content {
  display: flex;
  width: 70%;
  margin: 0 auto;
}

.main-image {
  width: 400px;
  object-fit: contain;
}

.button-action {
  width: 200px;
  height: 64px;
  background: rgb(7, 172, 255);
  color: white;
  border-radius: 8px;
}
</style>
