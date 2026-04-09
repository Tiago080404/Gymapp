export interface Exercise {
  name: string;
  muscle: MuscleGroup;
  id: number;
  weight: number;
  repetitions: number;
  sets: number;
}
export enum MuscleGroup {
  "Back",
  "Core",
  "Chest",
  "Legs",
  "Shoulders",
  "Arms",
}
