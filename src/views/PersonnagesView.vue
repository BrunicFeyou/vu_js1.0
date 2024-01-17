<script>
import cartesPerso from '../components/CartesPerso.vue'
import formPerso from '../components/FormPerso.vue'
import {usePersonnageStore} from '../stores/personnage.js'



export default {
  
    setup() { /// setup sert à récupérer des données du store et a les utiliser dans le template. les store permet de partager des données entre les composants
      const personnageStore = usePersonnageStore()
      return { 
        personnageStore
      }
    }, 
  name: 'PersonnagesView',

  components: {
    cartesPerso, 
    formPerso, 
  },

  data() {
    return {
      
      
    }
  },
  // methods: {
  //   ajoutPerso(personnage) {
  //     this.personnages.push(personnage) 
  //   }
  // },  
  computed: { // computed sert à récupérer des données du store et 
    personnages() {
      return this.personnageStore.personnages // personnageStore est un objet qui contient un tableau de
      // personnages je l'ai déclaré dans le setup().js et personnages est 
      //une propriété de cet objet
    }
  }
}
</script>


<template>
  <div class="personnages">
    <h1>This personnages</h1>
  </div>
  <formPerso/> 
  <div class="card-infomation" v-for="personnage in personnages" :key="personnage.pseudo">
    <cartesPerso :personnage="personnage" />
  </div>
</template>

<style>
.error {
  color: red;
}

.card-infomation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: rgb(16, 153, 239);
  width: 50%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgb(0, 0, 0);
  
}

@media (min-width: 1024px) {
  .personnages {
    min-height: 100vh;
    display: flex;
    align-items: center;
    color: black;
  }
}
</style>
