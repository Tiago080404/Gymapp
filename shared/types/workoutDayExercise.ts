export interface WorkoutDayExercise {
  name: string;
  muscle: MuscleGroup;
  exercise_id: number;
  weight: number;
  repetitions: number;
  sets: number;
  workoutday_id: number;
}
