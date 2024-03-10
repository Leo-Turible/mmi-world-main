<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref()
const page = ref(1)
const limit = ref(10)

async function getPokemonData() {
  try {
    if (page.value < 1) {
      page.value = 1
    }
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit.value}&offset=${(page.value - 1) * limit.value}`)
    data.value = response.data.results
    for (let pokemon of data.value) {
      const details = await axios.get(pokemon.url)
      pokemon.details = details.data
    }
  } catch (err) {
    console.error('Une erreur est survenue lors de la récupération des données de l\'API PokeAPI.', err)
  }
}

onMounted(getPokemonData)

const nextPage = () => {
  page.value++
  getPokemonData()
}

const prevPage = () => {
  page.value--
  getPokemonData()
}
</script>

<template>
  <div>
    <h1>Pokedex</h1>
    <button @click="prevPage">Previous</button>
    <button @click="nextPage">Next</button>
    <p>Page {{ page }}</p>
    <ul v-if="data">
      <li v-for="pokemon in data" :key="pokemon.name" class="pokemon-card">
        <h2>{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</h2>
        <div v-if="pokemon.details">
          <img :src="pokemon.details.sprites.front_default" alt="pokemon image">
          <p>Height: {{ pokemon.details.height }}</p>
          <p>Weight: {{ pokemon.details.weight }}</p>
          <p>Abilities:
            <ul>
              <li v-for="ability in pokemon.details.abilities" :key="ability.ability.name">
                {{ ability.ability.name }}
              </li>
            </ul>
          </p>
          <p>Types:
            <ul>
              <li v-for="type in pokemon.details.types" :key="type.type.name">
                {{ type.type.name }}
              </li>
            </ul>
          </p>
          <p>Base experience: {{ pokemon.details.base_experience }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pokemon-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 200px;
  display: inline-block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #333;
  text-align: center;
}

.pokemon-card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.pokemon-card h2 {
  margin-bottom: 10px;
  font-size: 1.2em;
}

.pokemon-card p {
  margin-bottom: 10px;
  font-size: 0.9em;
}
</style>