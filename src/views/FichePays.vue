<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id;
const nom = route.params.nom;
</script>

<template>
  <div>
    <h1>Fiche Pays</h1>
    <p>ID du pays: {{ id }}</p>
    <p>Nom du pay: {{ nom }}</p>
  </div>
</template>

<style scoped></style>