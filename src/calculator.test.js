import { minus, sum, divide, multiply } from "./calculator.js";

test("Adds two positive numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Minus second number from the first", () => {
  expect(minus(2, 5)).toBe(-3);
});

test("Multiply two numbers", () => {
  expect(multiply(5, 3)).toBe(15);
});

describe("divide()", () => {
  test("Divide whole number", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("Divide decimals", () => {
    expect(divide(11, 3)).toBe(3.67);
  });

  test("Divide negatives", () => {
    expect(divide(-4, -2)).toBe(2);
  });

  test("Divide one positive and one negative number", () => {
    expect(divide(-3, 5)).toBe(-0.6);
  });
});
