<script setup lang="ts">
    import { useQuasar } from 'quasar'
    import { ref } from 'vue'
    import { useTodoStore } from '../stores/TodoStore';

    const todos = useTodoStore();
    const input = ref('');

    const onSubmit = (thingTodo: string) => {
        if(thingTodo) {
            todos.addThingTodo(thingTodo)
            input.value = ''
        }
    }
</script>

<template>
    <q-form class="todoForm" @submit="onSubmit(input)">
        <q-input
            v-model="input"
            label="Add thing todo!"
            filled
        />
        <q-btn
            label="Add"
            type="submit"
            color="primary"
            unelevated
        />
    </q-form>
</template>

<style scoped>
    .todoForm{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>