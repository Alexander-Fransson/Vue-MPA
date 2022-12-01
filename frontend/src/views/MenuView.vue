<script setup lang="ts">
    import { useTodoStore } from '../stores/TodoStore'
    import TodoItem from '../components/TodoItem.vue';
    
    const todos = useTodoStore()
</script>

<template>
    <h2>Completed Todos</h2>

    <q-list v-if="(todos.getDone.length > 0)">
        <q-item v-for="items in todos.getDone">
            <TodoItem 
                :name="items.name" 
                :done="items.done" 
                :Id="items.id"
            />        
        </q-item>
    </q-list>
    <p v-else>Nothing marked as done!</p>
</template>

<style scoped>

</style>