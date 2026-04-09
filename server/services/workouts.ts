import { pool } from "../utils/db";

export async function getAllWorkouts() {
  const result = await pool.query("SELECT * FROM workout"); //später mit userid
  return result.rows;
}

export async function getWorkoutDays(workoutId: number) {
  const result = await pool.query(
    "SELECT * FROM workoutday WHERE workoutday.workout_id = $1",
    [workoutId],
  );
  return result.rows;
}
