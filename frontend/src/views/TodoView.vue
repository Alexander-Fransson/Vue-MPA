<template>
    <div>
        <h1>Todo list</h1>
        <AddItem></AddItem>
        <ItemList></ItemList>
    </div>
</template>

<script setup lang="ts">
    import ItemList from '../components/ItemListComponent.vue';
    import AddItem from '../components/AddItemComponent.vue';
</script>

<style scoped>

</style>