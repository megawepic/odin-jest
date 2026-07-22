import { analyseArray } from "./analyseArray.js";

describe("analyseArray()", () => {
  test("checking length of array", () => {
    expect(analyseArray([5, 10, 3]).length).toBe(3);
  });
  test("checking average of array", () => {
    expect(analyseArray([5, 11, 3, 2]).average).toBe(5.25);
  });
  test("checkin min of array", () => {
    expect(analyseArray([5, 3, 5, 1]).min).toBe(1);
  });
  test("checking max of array", () => {
    expect(analyseArray([1, 4, 1, 4, 29, 189237, 1278]).max).toBe(189237);
  });
  test("for single item array", () => {
    expect(analyseArray([5]).length).toBe(1);
    expect(analyseArray([5]).average).toBe(5);
    expect(analyseArray([5]).max).toBe(5);
    expect(analyseArray([5]).min).toBe(5);
  });
});
