<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const cca3 = route.params.cca3
const data = ref({})
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`)
    data.value = response.data[0]
    loading.value = false
  } catch (error) {
    console.error(error)
    loading.value = false
  }
})
</script>

<template>
  <div class="fiches-pays-container">
    <div v-if="loading">Loading...</div>
    <div v-else class="fiche-pays">
      <h1>{{ data.name.common }}</h1>
      <img :src="data.flags.png" alt="Flag">
      <p>Capital: {{ data.capital[0] }}</p>
      <p>Area: {{ data.area }} km²</p>
      <p>Languages: {{ Object.values(data.languages).join(', ') }}</p>
      <p>Currencies: {{ Object.values(data.currencies).map(c => c.name).join(', ') }}</p>
    </div>
  </div>

</template>

<style scoped>
.fiches-pays-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fiche-pays {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  display: inline-block;
}

.fiche-pays img {
  max-width: 100%;
  height: auto;
}
</style>