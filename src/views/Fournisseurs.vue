<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref()
const libelle = ref()
const rue = ref()
const codepostal = ref()
const ville = ref()
//const id = ref('')
const error = ref()
const id = ref('')


onMounted(async () => {
  try {
    const response = await axios.get('http://symfony.mmi-troyes.fr:8313/api/fournisseurs')
    data.value = response.data
  } catch (err) {
    error.value = 'Une erreur est survenue lors de la récupération des fournisseurs.'
  }
})

async function modifier(_id) {
  try {
    const response = await axios.get(`http://symfony.mmi-troyes.fr:8313/api/fournisseurs/${_id}`)
    const fournisseur = response.data
    id.value = fournisseur.id
    libelle.value = fournisseur.libelle
    rue.value = fournisseur.adresse.rue
    codepostal.value = fournisseur.adresse.codepostal
    ville.value = fournisseur.adresse.ville
  } catch (err) {
    error.value = 'Une erreur est survenue lors de la récupération des informations du fournisseur.'
  }
}

async function ajouterFournisseur() {
  if (!libelle.value || !rue.value || !codepostal.value || !ville.value) {
    error.value = 'Tous les champs sont requis.'
    return
  } else {
    error.value = ''
  }

  try {
    if (id.value !== '') {
      const response = await axios.put(`http://symfony.mmi-troyes.fr:8313/api/fournisseurs/${id.value}`, {
        libelle: libelle.value,
        adresse: {
          rue: rue.value,
          codepostal: codepostal.value,
          ville: ville.value
        }
      })
      const index = data.value['hydra:member'].findIndex(fournisseur => fournisseur.id === id.value)
      data.value['hydra:member'][index] = response.data
    } else {
      const response = await axios.post('http://symfony.mmi-troyes.fr:8313/api/fournisseurs', {
        libelle: libelle.value,
        adresse: {
          rue: rue.value,
          codepostal: codepostal.value,
          ville: ville.value
        }
      })
      data.value['hydra:member'].push(response.data)
      data.value['hydra:totalItems']++
    }
    id.value = ''
    libelle.value = ''
    rue.value = ''
    codepostal.value = ''
    ville.value = ''
  } catch (err) {
    error.value = 'Une erreur est survenue lors de l\'ajout du fournisseur.'
  }
}


async function supprimer(id) {
  try {
    await axios.delete(`http://symfony.mmi-troyes.fr:8313/api/fournisseurs/${id}`)
    data.value['hydra:member'] = data.value['hydra:member'].filter(fournisseur => fournisseur.id !== id)
    data.value['hydra:totalItems']--
  } catch (err) {
    error.value = 'Une erreur est survenue lors de la suppression du fournisseur.'
  }
}

</script>

<template>

  <div>
    <form @submit.prevent="ajouterFournisseur">
      <input type="text" v-model="libelle" placeholder="Libellé">
      <input type="text" v-model="rue" placeholder="Rue">
      <input type="text" v-model="codepostal" placeholder="Code Postal">
      <input type="text" v-model="ville" placeholder="Ville">
      <button type="submit">Ajouter</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>


  <div v-if="data">
    <h1>Fournisseurs</h1>
    <strong>Il y a {{ data['hydra:totalItems'] }}</strong>
    <ul v-for="fournisseur in data['hydra:member']" :key="fournisseur.id">
      <li>
        <strong>Libellé : {{ fournisseur.libelle }}</strong>
        <p v-if="fournisseur.adresse">
          Rue : {{ fournisseur.adresse.rue }} <br>
          Code postal : {{ fournisseur.adresse.codepostal }} <br>
          Ville : {{ fournisseur.adresse.ville }}
        </p>
        <p v-else>
          Pas d'adresse renseignée.
        </p>
        <button @click="modifier(fournisseur.id)">Modifier</button>
        <button @click="supprimer(fournisseur.id)">Supprimer</button>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Chargement...</p>
  </div>
</template>

<style scoped>

</style>