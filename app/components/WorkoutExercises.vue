<template>
  <div><h1>hallo</h1></div>
</template>
<script setup lang="ts">
const props = defineProps({
  dayId: { type: Number, required: true },
});
onMounted(async () => {
  await getExercises();
});
const getExercises = async () => {
  try {
    const data = await $fetch(`/api/exercises/${props.dayId}/exercises`);
    console.log(data);
  } catch (err) {
    console.log("ERROR", err);
  }
};
</script>
