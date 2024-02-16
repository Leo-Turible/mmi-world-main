<script setup>
defineProps({
  pays: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="card">
    <img :src="pays.flags.png" alt="Drapeau du pays" />
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