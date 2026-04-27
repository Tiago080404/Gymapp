import { getAllWorkouts } from "../../services/workouts";

export default defineEventHandler(async () => {
  return await getAllWorkouts();
});
