<script setup>
/*defineProps({
  nom: {
    type: String,
    default: 'Nom du pays'
  },
  capitale: {
    type: String,
    default: 'Capitale du Pays'
  }
})*/
defineProps({
  pays: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <!--<div class="card">
    <h2>{{ nom }}</h2>
    <p>{{ capitale }}</p>
  </div>
-->
  <div class="card">
    <img :src="pays.flags.png" alt="Drapeau du pays" />
    <h2>{{ pays.name.common }}</h2>
    <p>{{ pays.capital && pays.capital[0] }}</p>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  display: inline-block;
}

.card img {
  max-width: 100%;
  height: auto;
}
</style>