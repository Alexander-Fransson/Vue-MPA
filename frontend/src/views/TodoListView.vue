<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import AddTodoForm from '../components/AddTodoForm.vue'
    import TodoItem from '../components/TodoItem.vue'
    import { useTodoStore } from '../stores/TodoStore'

    const todos = useTodoStore()

</script>
<template>
    <h2>Todos Left To Do</h2>
    <AddTodoForm />
    <br>
    <q-list v-if="(todos.getYetToBeCompleted.length > 0)">
        <q-item v-for="items in todos.getYetToBeCompleted">
            <TodoItem 
                :name="items.name" 
                :done="items.done" 
                :Id="items.id"
            />
        </q-item>
    </q-list>
    <p v-else>Everything completed</p>


</template>
<style scoped>
    h4{
        margin: 2vw;
    }
</style>