<template>
  <div class="relative">
    <UButton
      class="absolute -top-4 -right-4 w-8 h-8 rounded-full"
      @click="$emit('close')"
      ><UIcon name="i-lucide-x"></UIcon
    ></UButton>
    <h1
      class="flex justify-center text-lg font-bold tracking-widest uppercase text-zinc-400 mb-6"
    >
      Exercises
    </h1>
    <UButton
      size="md"
      color="primary"
      variant="solid"
      @click="workoutStarted = true"
      >Start Workout</UButton
    >
    <div class="flex flex-col divide-y divide-zinc-800">
      <div
        v-for="(exercise, index) in exercises"
        :key="index"
        class="flex items-center justify-between py-3"
      >
        <span class="text-sm text-zinc-300">{{ exercise.name }}</span>

        <div class="flex items-center gap-4">
          <div
            class="flex flex-col items-center cursor-pointer"
            @click="editExercise(index, 'repetitions')"
          >
            <span class="text-[0.5rem] tracking-widest text-zinc-600 uppercase"
              >Reps</span
            >
            <input
              v-if="editing.index === index && editing.field === 'repetitions'"
              v-model="exercise.repetitions"
              type="number"
              class="w-10 bg-transparent border-b border-yellow-400 text-yellow-400 text-sm font-bold text-center outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
              @keyup.enter="stopEditExercise"
              @blur="stopEditExercise"
            />
            <span v-else class="text-sm font-bold text-yellow-400">{{
              exercise.repetitions
            }}</span>
          </div>

          <div
            class="flex flex-col items-center cursor-pointer"
            @click="editExercise(index, 'weight')"
          >
            <span class="text-[0.5rem] tracking-widest text-zinc-600 uppercase"
              >kg</span
            >
            <input
              v-if="editing.index === index && editing.field === 'weight'"
              v-model="exercise.weight"
              type="number"
              class="w-10 bg-transparent border-b border-yellow-400 text-yellow-400 text-sm font-bold text-center outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
              @keyup.enter="stopEditExercise"
              @blur="stopEditExercise"
            />
            <span v-else class="text-sm font-bold text-yellow-400">{{
              exercise.weight
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <UButton
        @click="saveFinishedWorkout"
        size="sm"
        color="error"
        variant="solid"
        >End Workout</UButton
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import type { WorkoutDayExercise } from "~~/shared/types/workoutDayExercise";
const emits = ["close"];
const props = defineProps({
  dayId: { type: Number, required: true },
});
const exercises = ref<WorkoutDayExercise[]>([]);
const editing = ref<{ index: number | null; field: string | null }>({
  index: null,
  field: null,
});
const workoutStarted = ref(false);
const toast = useToast();

onMounted(async () => {
  await getExercises();
});
const getExercises = async () => {
  try {
    const data = await $fetch(`/api/exercises/${props.dayId}/exercises`);
    exercises.value = data;
  } catch (err) {
    console.log("ERROR", err);
  }
};
const editExercise = (index: number, field: string) => {
  if (workoutStarted.value) {
    editing.value = { index, field };
  } else {
    toast.add({ title: "Workout not started!" });
  }
};
const stopEditExercise = () => {
  editing.value = { index: null, field: null };
};
const saveFinishedWorkout = async () => {
  if (workoutStarted.value) {
    await $fetch("/api/workout/workoutDayExercise", {
      method: "PATCH",
      body: exercises.value,
    });
    toast.add({ title: "Workout finished!" });
  } else {
    toast.add({ title: "You have to start the workout first!" });
  }
};
</script>
