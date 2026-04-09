import { getAllWorkouts } from "../../services/workouts";

export default defineEventHandler(async (event) => {
  return await getAllWorkouts();
});
