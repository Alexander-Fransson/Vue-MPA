<script setup lang="ts">
import { useItemStore } from '../stores/ItemStore';
import { storeToRefs } from 'pinia'; 
import ItemComponentVue from './ItemComponent.vue';

const storeRef = storeToRefs(useItemStore());
const todos = storeRef.todos;

</script>
<template>
    <section>
        <ItemComponentVue v-for="chores in todos" :name="chores.name" :done="chores.done" :hidden="chores.hidden"></ItemComponentVue>
    </section>
</template>

<style scoped>

</style>