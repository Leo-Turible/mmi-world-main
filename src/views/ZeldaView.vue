<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const dungeons = ref()

onMounted(async () => {
  await getDungeons()
})

async function getDungeons(limit = 50, page = 0, name = '') {
  try {
    const response = await axios.get(`https://zelda.fanapis.com/api/dungeons?limit=${limit}&page=${page}&name=${encodeURIComponent(name)}`)
    dungeons.value = response.data.data
  } catch (err) {
    console.error('Une erreur est survenue lors de la récupération des donjons.', err)
  }
}
</script>

<template>
  <div>
    <h1>Donjons de Zelda</h1>
    <ul v-if="dungeons">
      <li v-for="dungeon in dungeons" :key="dungeon.id">
        <h2>{{ dungeon.name }}</h2>
        <p>{{ dungeon.description }}</p>
      </li>
    </ul>
    <p v-else>Chargement...</p>
  </div>
</template>

<style scoped>

</style>