export function getCorrectName(exercise: string) {
  exercise = exercise.toLowerCase();
  return exercise.charAt(0).toUpperCase() + exercise.slice(1);
}
