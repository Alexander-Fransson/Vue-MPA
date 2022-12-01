<script setup lang="ts">
    import { useQuasar } from 'quasar'
    import { ref } from 'vue'
    import { useTodoStore } from '../stores/TodoStore';

    const todos = useTodoStore();
    const input = ref('');

    const onSubmit = (thingTodo: string) => {
        console.log('click');
        todos.addThingTodo(input.value);
        input.value = '';
    }
</script>

<template>
    <h1>1</h1>
    <q-form @submit="onSubmit(input)">
        <q-input
            v-model="input"
            label="Add thing todo!"
            :rules="[val => val.length > 0 || 'Dont waist space on this list']"
        />
        <q-btn
            label="Add"
            type="submit"
            color="primary"
        />
    </q-form>
</template>

<style scoped>

</style>