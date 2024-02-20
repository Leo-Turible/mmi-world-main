<script setup>
import { ref } from 'vue'
import axios from 'axios'
import CardPays from '@/components/CardPays.vue'

const data = ref([])
const recherche = ref('')

const rechercher = async () => {
  if (recherche.value) {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${recherche.value}`)
    data.value = response.data
  } else {
    data.value = []
  }
}

</script>

<template>
  <div id="recherche-page">
    <h1>Recherche</h1>
    <input type="text" v-model="recherche" @input="rechercher" placeholder="Rechercher un pays">
    <div id="cards-container">
      <div v-for="pays in data" :key="pays.cca3">
        <CardPays :pays="pays" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#recherche-page {
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