<template>
  <div class="p-4 space-y-2">
    <h1 class="text-2xl font-bold mb-4 flex justify-center">Exercises</h1>
    <div v-if="addNewExercise">
      <NewExerciseModal
        @close="addNewExercise = false"
        @new-exercise="getAllExercises"
      ></NewExerciseModal>
    </div>
    <div class="flex justify-center">
      <UInput placeholder="search..." v-model="search"></UInput>
    </div>
    <div class="flex justify-center mt-2">
      <UButton
        v-for="group in [
          'All',
          'Chest',
          'Legs',
          'Back',
          'Arms',
          'Core',
          'Shoulders',
        ]"
        :key="group"
        :label="group"
        size="xs"
        class="rounded-full mb-4"
        :variant="selected === group ? 'solid' : 'soft'"
        @click="selected = group"
      >
        {{ group }}
      </UButton>
    </div>
    <div
      v-for="exercise in filtered"
      class="flex items-center justify-between p-3 rounded-lg bg-elevated"
    >
      <div>
        <p class="font-medium text-sm">{{ exercise.name }}</p>
        <p class="text-xs">{{ exercise.muscle }}</p>
      </div>
    </div>
  </div>
  <div class="absolute right-0 bottom-0">
    <UButton class="w-8 h-8 rounded-full" @click="addNewExercise = true"
      ><UIcon name="i-lucide-plus"></UIcon
    ></UButton>
  </div>
</template>

<script setup lang="ts">
import NewExerciseModal from "~/components/NewExerciseModal.vue";
import type { Exercise } from "~/types/exercise";
const search = ref("");
const selected = ref("All");
const addNewExercise = ref(false);
const exercises = ref<Exercise[]>([]);
const getAllExercises = async () => {
  try {
    const data = await $fetch("/api/exercises/exercises", {
      method: "GET",
    });
    exercises.value = data;
  } catch (err) {
    console.log(err);
  }
};
onMounted(() => {
  getAllExercises();
});

const filtered = computed(() => {
  return exercises.value?.filter((ex: any) => {
    const matchGroup = selected.value === "All" || ex.muscle === selected.value;
    const searchGroup =
      !search.value ||
      ex.name.toLowerCase().includes(search.value.toLowerCase());
    return matchGroup && searchGroup;
  });
});
</script>
