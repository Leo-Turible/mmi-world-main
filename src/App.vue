<script setup>
const username = 'Leo'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <router-link :to="{name: 'user', params: {username: 'david'}}">
          Utilisateur David
        </router-link>
        <router-link :to="`/user/${username}`">
          Utilisateur variable
        </router-link>
        <router-link to="/pays">Pays</router-link>
        <router-link to="/recherche">Recherche</router-link>
        <router-link to="/fournisseurs">Fournisseurs</router-link>

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #3b8070;
  color: white;
  padding: 10px;
  text-align: center;
  width: 100%;

}

.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

nav {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
