<script setup lang="ts">
    import { useTodoStore } from '../stores/TodoStore'
</script>

<template>
    <h1>This Is A menu</h1>
    <p>You have {{useTodoStore().thingsTodo.length}} things todo!</p>
</template>

<style scoped>

</style>