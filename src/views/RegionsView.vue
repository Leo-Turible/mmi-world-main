<script setup>
import { ref } from 'vue'
//import FicheRegion from './FicheRegion.vue'
const regions = ref(['All','Europe', 'Asia', 'Africa', 'Oceania', 'Americas']) // Liste des régions
</script>

<template>
  <div>
    <h1>Régions</h1>
    <ul>
      <li v-for="region in regions" :key="region">
        <router-link :to="`/regions/${region}`">{{ region }}</router-link> <!-- Lien vers la fiche de la région -->
      </li>
    </ul>
    <router-view></router-view> <!-- Vue pour la fiche de la région -->
  </div>
</template>