<script>
import {useCompteurStore} from '../stores/compteur.js'
export default {
    name: 'compteurView',

    setup() { // le setup permet l'initialisation de la fonction qui se trouve dans le compteurs.js
        const compteurStore = useCompteurStore()
        return {
            compteurStore
        }
    },
 
    computed: { // Le computed permet de stocker les datas et les fonctions des autres pages à utiliser dans celle ci 
        // contraire à des méthodes, les computed ne sont pas appelés dans le template avec des parenthèses
        compteur() {
            return this.compteurStore.compteur
        }
    }
}
</script>

<template>
    <div>
        <span> j'ai cliqué {{compteur}} fois </span> // <!-- le compteur ici correspond à la fonction compteur() du computed -->
        <button @click="compteurStore.ajoutCompteur()"> Cliquez ici </button> 
        <!-- // dans le boutton j'appelle la fonction ajoutCompteur() qui se trouve dans le compteur.js. 
        J'y ai accès grâce au compteurStore définit dans le setup() -->
    </div>
</template>


<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: rgb(156, 147, 147);
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}


button {
  width: 200px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 0, 0);
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer; 
}

</style>