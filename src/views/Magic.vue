<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref()
const search = ref('')
const colorFilter = ref('')

async function getCardsData() {
  try {
    const response = await axios.get('https://api.magicthegathering.io/v1/cards')
    data.value = response.data.cards
  } catch (err) {
    console.error('Une erreur est survenue lors de la récupération des données de l\'API Magic The Gathering.', err)
  }
}

function filterByName(name) {
  return data.value.filter(card => card.name.toLowerCase().includes(name.toLowerCase()))
}

function filterByType(type) {
  return data.value.filter(card => card.types && card.types.includes(type))
}

function filterByColor(color) {
  return data.value.filter(card => card.colors && card.colors.includes(color))
}

onMounted(getCardsData)
</script>

<template>
  <div>
    <h1>Magic The Gathering</h1>
    <input type="text" v-model="search" placeholder="Search by name">
    <select v-model="colorFilter">
      <option value="">Filter by color</option>
      <option value="White">White</option>
      <option value="Blue">Blue</option>
      <option value="Black">Black</option>
      <option value="Red">Red</option>
      <option value="Green">Green</option>
    </select>
    <ul v-if="data">
      <li v-for="card in filterByName(search)" :key="card.id" v-if="colorFilter === '' || filterByColor(colorFilter).includes(card)">
        <h2>{{ card.name }}</h2>
        <img v-if="card.imageUrl" :src="card.imageUrl" alt="card image">
        <p>Type: {{ card.type }}</p>
        <p>Set: {{ card.set }}</p>
        <p>Colors: {{ card.colors.join(', ') }}</p>
        <p>Text: {{ card.text }}</p>
        <p>Rarity: {{ card.rarity }}</p>
        <p>Power: {{ card.power }}</p>
        <p>Toughness: {{ card.toughness }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>