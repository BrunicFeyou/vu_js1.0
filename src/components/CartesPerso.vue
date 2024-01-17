<script>
export default {
  name: 'CartesPerso',
  props: [
    'personnage'
  ]
}

</script>

<template>
  <div>
   <h1>{{ personnage.pseudo }}</h1>
    <h2>{{ personnage.age }} ans </h2>
    <p v-if="personnage.age < 18 ">La personne est mineur</p>
    <p v-else-if=" personnage.age >= 18 ">La personne est majeure</p>
  </div>
</template>


<style scoped>
    div{
        width: 200px;
        margin: 0 auto;
        height: 200px;
        background-color: rgb(16, 153, 239);;
        border-radius: 10px;
        padding : 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: white;
    }
</style>  