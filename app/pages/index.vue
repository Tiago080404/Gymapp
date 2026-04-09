<template>
  <UButton
    icon="i-lucide-rocket"
    size="md"
    color="primary"
    variant="solid"
    @click="allExercises"
    >Button</UButton
  >
</template>
<script setup lang="ts">
const allExercises = async () => {
  const rows = await $fetch("/api/exercises");
  console.log(rows);
};
</script>
