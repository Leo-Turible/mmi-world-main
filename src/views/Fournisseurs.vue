<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref()
const libelle = ref()
const error = ref()

onMounted(async () => {
  try {
    const response = await axios.get('http://symfony.mmi-troyes.fr:8313/api/fournisseurs')
    data.value = response.data
  } catch (err) {
    error.value = 'Une erreur est survenue lors de la récupération des fournisseurs.'
  }
})

async function ajouterFournisseur() {
  if (!libelle.value) {
    error.value = 'Le libellé est requis.'
    return
  }

  try {
    const response = await axios.post('http://symfony.mmi-troyes.fr:8313/api/fournisseurs', {
      libelle: libelle.value
    })
    data.value['hydra:member'].push(response.data)
    libelle.value = ''
  } catch (err) {
    error.value = 'Une erreur est survenue lors de l\'ajout du fournisseur.'
  }
}

</script>

<template>

  <div>
    <input type="text" v-model="libelle">
    <button @click="ajouterFournisseur">Ajouter</button>
    <p v-if="error">{{ error }}</p>
  </div>
  <div v-if="data">
    <h1>Fournisseurs</h1>
    <strong>Il y a {{ data['hydra:totalItems'] }}</strong>
    <ul v-for="fournisseur in data['hydra:member']">
      <li >
        Libellé : {{ fournisseur.libelle }}
      </li>
      <li>
        Adresse : {{ fournisseur.adresse }}
      </li>
      <li>
        Code postal : {{ fournisseur.codePostal }}
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Chargement...</p>
  </div>
</template>

<style scoped>

</style>