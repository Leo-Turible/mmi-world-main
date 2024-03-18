<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import CardPays from '@/components/CardPays.vue'

const data = ref([])
const listeComplete = ref([])
const recherche = ref('')
const showFlags = ref(true)
const selectedCountries = ref(0) // Ajout de la variable selectedCountries

onMounted(async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all')
  listeComplete.value = response.data
  data.value = [...listeComplete.value]
})

const filtrer = () => {
  data.value = listeComplete.value.filter(pays =>
    pays.name.common.toLowerCase().includes(recherche.value.toLowerCase()) ||
    (pays.capital && pays.capital[0].toLowerCase().includes(recherche.value.toLowerCase()))
  )
}

const selectCountry = (payload) => { // Ajout de la fonction selectCountry
  if (payload.isSelected) {
    selectedCountries.value++
  } else {
    selectedCountries.value--
  }
}
</script>

<template>
  <div id="pays-page">
    <h1>Pays</h1>
    <p>Nombre de pays sélectionnés : {{ selectedCountries }}</p> <!-- Affichage du nombre de pays sélectionnés -->
    <input type="text" v-model="recherche" @input="filtrer" placeholder="Rechercher un pays">
    <input type="checkbox" v-model="showFlags"> Afficher les drapeaux
    <div id="cards-container">
      <div v-for="pays in data" :key="pays.cca3">
        <CardPays :pays="pays" :showFlags="showFlags" @selectCountry="selectCountry" /> <!-- Écoute de l'événement -->
      </div>
    </div>
  </div>
</template>

<style scoped>
#pays-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
}
</style>