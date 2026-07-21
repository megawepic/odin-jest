import { capitalise } from "./capitalise.js";

test("Capitalise first letter", () => {
  expect(capitalise("hello")).toBe("Hello");
});
