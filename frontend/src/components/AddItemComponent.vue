<script setup lang="ts">
    import { useItemStore } from '../stores/ItemStore';
    import { ref } from 'vue';

    const store = useItemStore();
    const newItem = ref('');
</script>

<template>
    <form @submit.prevent="store.add({name:newItem, done:false, hidden:false})">
        <input v-model="newItem" type="text"/>
        <input type="submit" value="Add">
    </form>
</template>

<style scoped>

</style>