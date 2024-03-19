<script setup>
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import CardPays from '@/components/CardPays.vue'

const route = useRoute() // Get the current route object
const region = ref(route.params.region) // Get the 'region' parameter from the route params
const pays = ref([])

const fetchPays = async () => {
  const url = region.value === 'All' ? 'https://restcountries.com/v3.1/all' : `https://restcountries.com/v3.1/region/${region.value}`
  const response = await axios.get(url)
  pays.value = response.data
}


watch(() => route.params.region, (newRegion) => { // Watch for changes in the 'region' route parameter
  region.value = newRegion
  fetchPays()
})

onMounted(fetchPays) // Fetch the countries when the component is mounted
</script>

<template>
  <div>
    <h2>{{ region }}</h2>
    <div v-for="pays in pays" :key="pays.cca3">
      <CardPays :pays="pays" />
    </div>
  </div>
</template>