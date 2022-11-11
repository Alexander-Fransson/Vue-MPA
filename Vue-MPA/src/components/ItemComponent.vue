<template>
    <div>
        <span>
            {{name}}
        </span>
        <input type="checkbox">
        <button>X</button>
    </div>
</template>
<script setup lang="ts">
    const itemProps = defineProps<{name: string, done: boolean, hidden: boolean}>();
</script>
<style scoped>

</style>