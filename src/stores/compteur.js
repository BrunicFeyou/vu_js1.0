import {defineStore} from "pinia"

export const useCompteurStore = defineStore('compteur', {   
    state: () => ({
        compteur : 0
    }), 
    actions: {
        ajoutCompteur() {
            this.compteur++
        }
    }


})