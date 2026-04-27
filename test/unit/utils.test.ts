import { describe, it, vi, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Libary from "@/pages/libary.vue";

vi.mock("../../server/utils/db", () => ({
  pool: {
    query: vi.fn(),
    connect: vi.fn(),
  },
}));

describe("just a simple test", () => {
  it("just to get green", () => {});
});
describe("Exercises", () => {
  const mockExercises = [
    { name: "Bench Press", muscle: "Chest" },
    { name: "Squat", muscle: "Legs" },
    { name: "Pull Up", muscle: "Back" },
  ];
  it("returns all exercises when selected is All", () => {
    const wrapper = mount(Libary);

    wrapper.vm.exercises = mockExercises;
    wrapper.vm.selected = "All";

    expect(wrapper.vm.filtered).toHaveLength(3);
  });

  it("filters by selected musclegroup", () => {
    const wrapper = mount(Libary);

    wrapper.vm.exercises = mockExercises;
    wrapper.vm.selected = "Chest";

    expect(wrapper.vm.filtered).toHaveLength(1);
  });
  it("filter by searched exercise", () => {
    const wrapper = mount(Libary);

    wrapper.vm.exercises = mockExercises;
    wrapper.vm.search = "Squat";

    expect(wrapper.vm.filtered[0].name).toBe("Squat");
  });
});
