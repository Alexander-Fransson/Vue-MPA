<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import AddTodoForm from '../components/AddTodoForm.vue'
    import TodoItem from '../components/TodoItem.vue'
    import { useTodoStore } from '../stores/TodoStore'

    const todos = useTodoStore()

</script>
<template>
    <h1>This Is Todo List</h1>
    <AddTodoForm />

    <h4>Yey to be completed</h4>
    <q-list v-if="(todos.getYetToBeCompleted.length > 0)">
        <q-item v-for="items in todos.getYetToBeCompleted">
            <TodoItem 
                :name="items.name" 
                :done="items.done" 
                :id="items.id"
            />
        </q-item>
    </q-list>
    <p v-else>Everything completed</p>

    <h4>Done</h4>
    <q-list v-if="(todos.getDone.length > 0)">
        <q-item v-for="items in todos.getDone">
            <TodoItem 
                :name="items.name" 
                :done="items.done" 
                :id="items.id"
            />        
        </q-item>
    </q-list>
    <p v-else>Nothing marked as done!</p>

</template>
<style scoped>
    h4{
        margin: 2vw;
    }
</style>