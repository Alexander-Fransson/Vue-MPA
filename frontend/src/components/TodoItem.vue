<script setup lang="ts">
    import { useTodoStore } from '../stores/TodoStore'

    const todos = useTodoStore()

    const props = defineProps<{
        Id: number
        name: string
        done: boolean
    }>()

    const remove = () => {
        todos.removeThingTodo(props.Id)
    }

    const complete = () => {
        todos.changeTodo(props.Id, props.name, !props.done)
    }
</script>

<template>
    <section class="container">
        <p :class="{uncompletedTodo: !done, completedTodo: done}">{{name}}</p>
        <q-btn 
            @click="complete()"
            label="Y"
            color="pink-12"
        />
        <q-btn
            @click="remove()" 
            label="X"
            color="blue-3"
        />
    </section>
</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: row;
        margin: auto;        
    }
    .uncompletedTodo{
        font-size: large;
        padding: 1vw;
        margin: 0vh;
    }
    .completedTodo{
        font-size: large;
        text-decoration: line-through;
        padding: 1vw;
        margin: 0vh;
    }
</style>