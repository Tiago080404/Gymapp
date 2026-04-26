<template>
  <div
    class="fixed z-50 inset-0 top-0 left-0 flex justify-center items-center bg-black/45 overflow-auto"
  >
    <div class="bg-[#192438] rounded-xl p-8 w-[380px] max-w-[90vw]">
      <div class="flex justify-between items-center mb-6">
        <h1>Add new Exercise</h1>
        <UButton
          class="flex justify-center items-center w-8 h-8 rounded-full"
          @click="$emit('close')"
        >
          <UIcon name="i-lucide-x" />
        </UButton>
      </div>
      <label class="block text-xs text-gray-400 mb-1.5">Exercise name</label>
      <UInput
        v-model="newExercise"
        placeholder="new exercise"
        class="w-3/4"
      />
      <label class="block text-xs text-gray-400 mb-1.5">Category</label>
      <USelect
        v-model="selectedMuscleGroup"
        :items="muscleGroups"
        class="w-3/4"
      />
      <UButton
        class="flex justify-center items-center w-3/4 mt-3"
        @click="addNewExercise"
      >
        ADD
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const muscleGroups = ref([
  'Back',
  'Core',
  'Chest',
  'Legs',
  'Shoulders',
  'Arms',
])
const selectedMuscleGroup = ref('Back')
const newExercise = ref('')
const toast = useToast()
const emit = defineEmits(['new-exercise', 'close'])

const addNewExercise = async () => {
  try {
    const response = await $fetch('/api/exercises/exercises', {
      method: 'POST',
      body: {
        muscleGroup: selectedMuscleGroup.value,
        exercise: newExercise.value,
      },
    })
    toast.add({ title: 'New exercise', description: `${response[0].name}` })
    emit('new-exercise')
    emit('close')
  } catch (err) {
    console.log(err)
    toast.add({ title: 'Could not add new exercise', color: 'error' })
  }
}
</script>