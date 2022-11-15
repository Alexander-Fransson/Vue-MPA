<script setup lang="ts">
    import { useItemStore } from '../stores/ItemStore';
    const store = useItemStore();
</script>

<template>
    <p>You currently have {{store.count}} things todo.</p>
</template>

<style>

</style>