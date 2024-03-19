<script setup>
import { ref } from 'vue'
const regions = ref(['All','Europe', 'Asia', 'Africa', 'Oceania', 'Americas'])
</script>

<template>
  <div>
    <h1>Régions</h1>
    <ul>
      <li v-for="region in regions" :key="region">
        <router-link :to="`/regions/${region}`">{{ region }}</router-link>
      </li>
    </ul>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>