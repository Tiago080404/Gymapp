import { describe, it, test, vi,expect } from "vitest";
import { pool } from "../../server/utils/db";
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
  it("", () => {
    const mockExercises = [
    { name: "Bench Press", muscle: "Chest" },
    { name: "Squat", muscle: "Legs" },
    { name: "Pull Up", muscle: "Back" }
  ];

   const wrapper = mount(Libary);

    wrapper.vm.exercises = mockExercises;
    wrapper.vm.selected = "All";

    expect(wrapper.vm.filtered).toHaveLength(3);
  });
});
