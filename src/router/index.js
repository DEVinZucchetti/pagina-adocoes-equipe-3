import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Eliana/HomeView.vue'
import PetsList from '../views/Eliana/PetsList.vue'
import PetsPesquisa from '../views/Eliana/PetsPesquisa.vue'
import Main from '../views/Main.vue'
import PetProfile from '../views/Eliana/PetProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pets-adocao',
      name: 'PetsList',
      component: PetsList
    },
    {
      path: '/pets-adocao/:id/perfil',
      name: 'PetProfile',
      component: PetProfile
    },
    {
      path: '/pets-pesquisa',
      name: 'PetsPesquisa',
      component: PetsPesquisa
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },  
   
  ]
})

export default router
