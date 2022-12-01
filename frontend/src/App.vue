<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useTodoStore } from './stores/TodoStore'
useTodoStore().refillStore();
</script>

<template>
    <RouterLink to="/">Complete </RouterLink>
    <span>|</span>
    <RouterLink to="/todo"> Left todo</RouterLink>
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
