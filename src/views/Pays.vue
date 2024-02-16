<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import CardPays from '@/components/CardPays.vue'

const data = ref([])

onMounted(async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all')
  data.value = response.data
})
</script>

<template>
  <div id="pays-page">
    <h1>Pays</h1>
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