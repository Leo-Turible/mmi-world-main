<script setup>
defineProps({
  pays: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <h2>{{ pokemon.name }}</h2>
  <img :src="pokemon.details.sprites.front_default" alt="pokemon image">
  <p>Height: {{ pokemon.details.height }}</p>
  <p>Weight: {{ pokemon.details.weight }}</p>
  <p>Abilities:
    <ul>
      <li v-for="ability in pokemon.details.abilities" :key="ability.ability.name">
        {{ ability.ability.name }}
      </li>
    </ul>
  </p>

</template>

<style scoped>

</style>