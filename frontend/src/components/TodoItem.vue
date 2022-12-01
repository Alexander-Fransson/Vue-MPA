<script setup lang="ts">
    defineProps<{
        id: number
        name: string
        done: boolean
    }>()

    const remove = () => {
        console.log('delete');
    }

    const complete = () => {
        console.log('completed')
    }
</script>

<template>
    <section class="container">
        <p>{{name}}</p>
        <q-btn 
            @click="complete()"
            label="Y"
            color="green"
        />
        <q-btn
            @click="remove()" 
            label="X"
            color="red"
        />
    </section>
</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: row;
        margin: auto;        
    }
    p{
        font-size: large;
        padding: 1vw;
        margin: 0vh;
    }
</style>