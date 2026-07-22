import { reverseString } from "./reverseString.js";

test("String is reversed", () => {
  expect(reverseString("jelly")).toBe("yllej");
});

test("String is reversed", () => {
  expect(reverseString("wdjqwdiasdxzc")).toBe("czxdsaidwqjdw");
});
