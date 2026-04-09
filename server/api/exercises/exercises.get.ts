import { getAllExercises } from "../../services/exercises";

export default defineEventHandler(async()=>{
  return await getAllExercises()
})