<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4 flex justify-center">Workouts</h1>
    <div
      v-for="workout in workouts"
      :key="workout.id"
      class="flex items-center justify-between p-3 rounded-lg bg-elevated"
      @click="selectWorkout(workout)"
    >
      <div>
        {{ workout.name }}
      </div>
    </div>
    <div v-if="workoutDaysOpen">
      <WorkoutDays
        :selected-workout="selectedWorkout"
        @close="workoutDaysOpen = false"
      ></WorkoutDays>
    </div>
    <AppNavbar></AppNavbar>
  </div>
</template>

<script setup lang="ts">
import WorkoutDays from "~/components/WorkoutDays.vue";
import type { Workout } from "#shared/types/workout";
import AppNavbar from "~/components/AppNavbar.vue";

const workouts = ref<Workout[]>([]);
const workoutDaysOpen = ref(false);
const selectedWorkout = ref<Workout>({
  id: 0,
  userId: 0,
  name: "",
});
onMounted(() => {
  getWorkouts();
});
// liste von allen workouts kannst vllt oben drei punkte bei jeden fuer edit und delete und draufklicken normal um uebungen im scrolldown zu sehen und da dann start knopf und kannst dann alles aendern

const getWorkouts = async () => {
  const data = await $fetch("/api/workout/workouts", {
    method: "GET",
  });
  workouts.value = data;
};
const selectWorkout = (workout: Workout) => {
  workoutDaysOpen.value = true;
  selectedWorkout.value = workout;
};
</script>
