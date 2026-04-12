import { saveFinishedWorkout } from "~~/server/services/workouts";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const changedRows = await saveFinishedWorkout(body);
  setResponseStatus(event, 200);
  return { changedRows };
});
