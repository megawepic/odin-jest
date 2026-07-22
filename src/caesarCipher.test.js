import { caesarCipher } from "./caesarCipher.js";

describe("caesarCipher()", () => {
  test("shifting letters by x keys", () => {
    expect(caesarCipher("jacob", 3)).toBe("mdfre");
  });

  test("shifting letters including punctuations", () => {
    expect(caesarCipher("Hello, World", 3)).toBe("Khoor, Zruog");
  });

  test("shifting with negative key", () => {
    expect(caesarCipher("abc", -1)).toBe("zab");
  });
});
