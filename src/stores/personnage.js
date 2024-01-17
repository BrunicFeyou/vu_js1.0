import {defineStore}from "pinia"

export const usePersonnageStore = defineStore('personnage', {
    state: () => ({
        personnages: [
            {
              pseudo: 'Gregoire',
              age: 25,
    
            },
    
            {
              pseudo: 'Slyma',
              age: 16,
    
            },
    
            {
              pseudo: 'Moulie', 
              age: 40,
            }
    
          ], 
    }),
    actions : { // les actions sont les fonctions qui vont modifier le state et etre accessible en glo
        ajoutPerso(personnage) {
            this.personnages.push(personnage)
        }
    }
})