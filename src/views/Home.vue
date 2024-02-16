<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

let data = ref('')

onMounted(async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all')
  data.value = response.data
})
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>{{ data }}</p>
  </div>
</template>

<style scoped>

</style>