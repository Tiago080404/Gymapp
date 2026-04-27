import { pool } from "../utils/db";
import type { WorkoutDayExercise } from "#shared/types/workoutDayExercise";

export async function getAllWorkouts() {
  const result = await pool.query("SELECT * FROM workout"); // später mit userid
  return result.rows;
}

export async function getWorkoutDays(workoutId: number) {
  const result = await pool.query(
    "SELECT * FROM workoutday WHERE workoutday.workout_id = $1",
    [workoutId],
  );
  return result.rows;
}
export async function saveFinishedWorkout(workout: WorkoutDayExercise[]) {
  let changedRows = null;

  for (let i = 0; i < workout.length; i++) {
    const result = await pool.query(
      "UPDATE workoutdayexercise SET repetitions = $1, sets = $2, weight = $3 WHERE workoutday_id = $4 AND exercise_id = $5",
      [
        workout[i]?.repetitions,
        workout[i]?.sets,
        workout[i]?.weight,
        workout[i]?.workoutday_id,
        workout[i]?.exercise_id,
      ],
    );

    changedRows = result.rowCount;
  }
  return changedRows;
}
