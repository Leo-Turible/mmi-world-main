<script setup>
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import CardPays from '@/components/CardPays.vue'

const route = useRoute()
const region = ref(route.params.region)
const pays = ref([])

const fetchPays = async () => {
  const url = region.value === 'All' ? 'https://restcountries.com/v3.1/all' : `https://restcountries.com/v3.1/region/${region.value}`
  const response = await axios.get(url)
  pays.value = response.data
}


watch(() => route.params.region, (newRegion) => {
  region.value = newRegion || 'All'
  fetchPays()
})

onMounted(fetchPays)
</script>

<template>
  <div>
    <h2>{{ region }}</h2>
    <div v-for="pays in pays" :key="pays.cca3">
      <CardPays :pays="pays" />
    </div>
  </div>
</template>