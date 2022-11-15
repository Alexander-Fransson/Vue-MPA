<script setup lang="ts">
    import { useItemStore } from '../stores/ItemStore';
    let store = useItemStore();
    const itemProps = defineProps<{name: string, done: boolean, hidden: boolean}>();
</script>

<template>
    <div>
        <span>
            {{name}}
        </span>
        <input type="checkbox">
        <button @click="store.removeChore(name)">X</button>
    </div>
</template>

<style scoped>

</style>