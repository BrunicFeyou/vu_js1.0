<script>
import cartesPerso from './CartesPerso.vue'
import {usePersonnageStore} from '../stores/personnage.js'

export default {
    name: 'FormPerso',

    data() {
        return {
            formPerso: {
                pseudo: '',
                age: 0
            }
        
        }
    },
    setup() {
        const personnageStore = usePersonnageStore()
        return {
             personnageStore
        }
    }, 
    
//   emits : ['ajoutPerso'],
//     data () {
//         return {
//             formPerso: {
//                 pseudo: '',
//                 age: 0

//             }
//         }
//     }, 

    components: {
        cartesPerso,
    },
    
    methods: {
        ajoutPerso() { // la fonction ajoutPerso est appelé dans le template avec @submit
            // this.$emit('ajoutPerso', this.formPerso) // je transfère les éléments de formPerso dans dans le parents PersonnagesView 
            this.personnageStore.ajoutPerso(this.formPerso) 
            this.formPerso = {
                pseudo : '', 
                age : 0
            }   
        }
    },
}
</script>


<template> 
<h2>Preview </h2>
<cartesPerso :personnage="formPerso" />
  <form @submit.prevent="ajoutPerso()">
    <input type="text" placeholder="Pseudo" v-model="formPerso.pseudo">
    <input type="number" placeholder="Age" v-model="formPerso.age">
    <p class="error" v-if="formPerso.pseudo.length < 3">Le pseudo doit faire au moins 3 caractères</p>
    <button type ="submit">Envoyer</button>
  </form>
  
</template>

<style scoped >

form {
    background-color: rgb(16, 153, 239);
    width: 50%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
}

input {
    padding: 10px;
    border-radius: 10px;
    border: none;
}

button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: rgb(16, 153, 239);
    font-weight: bold;
    border: 1px solid white;
}

p {
    color: yellow;
    font-weight: bold;
}

</style>