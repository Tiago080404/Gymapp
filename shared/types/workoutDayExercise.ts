export interface WorkoutDayExercise {
  name: string;
  muscle: typeof MuscleGroup;
  exercise_id: number;
  weight: number;
  repetitions: number;
  sets: number;
  workoutday_id: number;
}
