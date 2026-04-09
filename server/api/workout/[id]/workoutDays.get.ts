import { getWorkoutDays } from "~~/server/services/workouts";

export default defineEventHandler(async (event) => {
  const idParam = getRouterParam(event, "id");
  const id = Number(idParam);
  return await getWorkoutDays(id);
});
