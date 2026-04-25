<template>
  <div
    class="fixed z-50 inset-0 top-0 left-0 flex justify-center items-center bg-black/45 overflow-auto"
  >
    <div class="bg-[#192438] rounded-xl p-8 w-[380px] max-w-[90vw]">
      <div v-if="!openWorkoutExercise">
        <div class="flex justify-end">
          <UButton class="w-8 h-8 rounded-full" @click="$emit('close')"
            ><UIcon name="i-lucide-x"></UIcon
          ></UButton>
        </div>
        <h1
          class="flex justify-center text-lg font-bold tracking-widest uppercase text-zinc-400 mb-6"
        >
          Workoutdays
        </h1>
        <div
          v-for="workout in workoutDays"
          @click="selectWorkoutDay(workout.id)"
          class="hover:cursor-pointer rounded-lg bg-elevated hover:bg-white/10 transition-colors duration-200"
        >
          {{ workout.name }}{{ workout.weight }}
        </div>
      </div>
      <div v-else>
        <WorkoutExercises
          :dayId="selectedWorkoutDayId"
          @close="openWorkoutExercise = false"
        ></WorkoutExercises>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Exercise } from "#shared/types/exercise";
import type { Workout } from "#shared/types/workout";
import WorkoutExercises from "./WorkoutExercises.vue";
const workoutDays = ref<Exercise[]>([]);
const openWorkoutExercise = ref(false);
const selectedWorkoutDayId = ref<number>(0);
const emits = ["close"];

const props = defineProps({
  //und gewicht dazu adden in der db und sätze
  selectedWorkout: { type: Object as () => Workout, required: true },
});

onMounted(() => {
  getSpecificExercises();
});
const getSpecificExercises = async () => {
  const data = await $fetch(
    `/api/workout/${props.selectedWorkout.id}/workoutDays`,
  );
  console.log(data);
  workoutDays.value = data;
};
const selectWorkoutDay = (id: number) => {
  openWorkoutExercise.value = true;
  selectedWorkoutDayId.value = id;
};
</script>
