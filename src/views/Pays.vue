<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import CardPays from '@/components/CardPays.vue'

const pays = [
  { id: 1, nom: 'France' },
  { id: 2, nom: 'Italie' },
  { id: 3, nom: 'Espagne' },
  { id: 4, nom: 'Allemagne' },
  { id: 5, nom: 'Portugal' },
  { id: 6, nom: 'Pays-Bas' },
  { id: 7, nom: 'Belgique' },
  { id: 8, nom: 'Suisse' },
  { id: 9, nom: 'Autriche' },
  { id: 10, nom: 'Royaume-Uni' },
  { id: 11, nom: 'Irlande' },
  { id: 12, nom: 'Danemark' },
  { id: 13, nom: 'Suède' },
  { id: 14, nom: 'Norvège' },
  { id: 15, nom: 'Finlande' },
  { id: 16, nom: 'Grèce' },
  { id: 17, nom: 'Pologne' },
  { id: 18, nom: 'République tchèque' },
  { id: 19, nom: 'Hongrie' },
  { id: 20, nom: 'Slovaquie' },
  { id: 21, nom: 'Slovénie' },
  { id: 22, nom: 'Croatie' },
  { id: 23, nom: 'Bosnie-Herzégovine' },
  { id: 24, nom: 'Serbie' },
  { id: 25, nom: 'Monténégro' },
  { id: 26, nom: 'Macédoine du Nord' },
  { id: 27, nom: 'Kosovo' },
  { id: 28, nom: 'Albanie' },
  { id: 29, nom: 'Bulgarie' },
  { id: 30, nom: 'Roumanie' },
  { id: 31, nom: 'Moldavie' },
  { id: 32, nom: 'Ukraine' },
  { id: 33, nom: 'Biélorussie' },
  { id: 34, nom: 'Russie' },
  { id: 35, nom: 'Estonie' },
  { id: 36, nom: 'Lettonie' },
  { id: 37, nom: 'Lituanie' },
  { id: 38, nom: 'Islande' },
  { id: 39, nom: 'Malte' },
  { id: 40, nom: 'Chypre' },
  { id: 41, nom: 'Turquie' },
  { id: 42, nom: 'Géorgie' },
  { id: 43, nom: 'Arménie' },
  { id: 44, nom: 'Azerbaïdjan' },
  { id: 45, nom: 'Kazakhstan' },
  { id: 46, nom: 'Ouzbékistan' },
  { id: 47, nom: 'Turkménistan' },
  { id: 48, nom: 'Tadjikistan' },
  { id: 49, nom: 'Kirghizistan' },
  { id: 50, nom: 'Tunisie' },
  { id: 51, nom: 'Maroc' },
  { id: 52, nom: 'Algérie' },
  { id: 53, nom: 'Libye' },
  { id: 54, nom: 'Égypte' },
  { id: 55, nom: 'Soudan' },
  { id: 56, nom: 'Sénégal' },
  { id: 57, nom: 'Mali' },
  { id: 58, nom: 'Niger' },
  { id: 59, nom: 'Tchad' },
  { id: 60, nom: 'République centrafricaine' },
  { id: 61, nom: 'Cameroun' },
  { id: 62, nom: 'Nigeria' },
  { id: 63, nom: 'Ghana' },
  { id: 64, nom: 'Côte d\'Ivoire' },
  ];

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