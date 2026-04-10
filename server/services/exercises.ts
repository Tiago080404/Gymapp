import { pool } from "../utils/db";

export async function getAllExercises() {
  const result = await pool.query("SELECT * FROM exercises");
  return result.rows;
}
export async function saveNewExericse(name: string, muscle_group: string) {
  const result = await pool.query(
    "INSERT INTO exercises (name,muscle) VALUES ($1,$2) RETURNING *",
    [name, muscle_group],
  );
  return result.rows;
}

export async function getExercisesForDay(workoutDayId: number) {
  const result = await pool.query(
    "SELECT exercises.* FROM workoutdayexercise JOIN exercises ON workoutdayexercise.exercise_id = exercises.id WHERE workoutdayexercise.workoutday_id = $1",
    [workoutDayId],
  );
  return result.rows;
}
