<script setup lang="ts">
import { useItemStore } from '../stores/ItemStore'; 
import ItemComponentVue from './ItemComponent.vue';

const store = useItemStore();
const todos = store.todos;

</script>
<template>
    <section>
        <ItemComponentVue v-for="chores in todos" :name="chores.name" :done="chores.done" :hidden="chores.hidden"></ItemComponentVue>
    </section>
</template>

<style scoped>

</style>