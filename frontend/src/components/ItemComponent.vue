<template>
    <div>
        <span>
            {{name}}
        </span>
        <input type="checkbox">
        <button @click="store.removeChore(name)">X</button>
    </div>
</template>
<script setup lang="ts">
    import { useItemStore } from '../stores/ItemStore';
    const store = useItemStore();
    const itemProps = defineProps<{name: string, done: boolean, hidden: boolean}>();
</script>
<style scoped>

</style>