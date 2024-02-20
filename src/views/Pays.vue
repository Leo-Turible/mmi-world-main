<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import CardPays from '@/components/CardPays.vue'

const data = ref([])
const listeComplete = ref([])
const recherche = ref('')

onMounted(async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all')
  listeComplete.value = response.data
  data.value = [...listeComplete.value]
})

const filtrer = () => {
  data.value = listeComplete.value.filter(pays => pays.name.common.toLowerCase().includes(recherche.value.toLowerCase()))
}

</script>

<template>
  <div id="pays-page">
    <h1>Pays</h1>
    <input type="text" v-model="recherche" @input="filtrer" placeholder="Rechercher un pays">
    <!--<button @click="filtrer">Filtrer</button>-->
    <!--<button @click="reset">Reset</button>-->

    <div id="cards-container">
      <div v-for="pays in data" :key="pays.cca3">
        <CardPays :pays="pays" />
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