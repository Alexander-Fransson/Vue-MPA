<script setup lang="ts">
import { useItemStore } from './stores/ItemStore';
</script>

<template>
  <RouterLink to="/"> Menu</RouterLink>
  <span>  |  </span>
  <RouterLink to="/todos">Todos</RouterLink>
  <RouterView></RouterView>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
