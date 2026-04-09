import { getExercisesForDay } from "~~/server/services/exercises";

export default defineEventHandler(async (event) => {
  const idParam = getRouterParam(event, "id");
  const id = Number(idParam);
  return await getExercisesForDay(id);
});
