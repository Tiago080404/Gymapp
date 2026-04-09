import { saveNewExericse } from "../../services/exercises";
import { getCorrectName } from "../../utils/exerciseMapper";

export default defineEventHandler(async (req) => {
  const body = await readBody(req);
  body.exercise = getCorrectName(body.exercise);
  return await saveNewExericse(body.exercise, body.muscleGroup);
});
