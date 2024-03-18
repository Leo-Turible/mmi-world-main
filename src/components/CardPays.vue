<script setup>
import { watch, ref } from 'vue'

const emit = defineEmits(['selectCountry']) // Définition de l'événement
const props = defineProps({
  pays: {
    type: Object,
    default: () => ({})
  },
  showFlags: {
    type: Boolean,
    default: true
  }
})

const isSelected = ref(false) // Ajout de la variable isSelected

watch(() => isSelected.value, (newValue) => { // Surveillance de la variable isSelected
  emit('selectCountry', { isSelected: newValue, country: props.pays }) // Émission de l'événement
})
</script>

<template>
  <div class="card">
    <input type="checkbox" v-model="isSelected"> <!-- Ajout du checkbox -->
    <img v-if="showFlags" :src="pays.flags.png" alt="Drapeau du pays" />
    <h2>{{ pays.name.common }}</h2>
    <p>{{ pays.capital && pays.capital[0] }}</p>
    <router-link :to="`/fiche-pays/${pays.cca3}`">{{ pays.name.common }}</router-link>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  display: inline-block;
}

.card img {
  max-width: 100%;
  height: auto;
}
</style>