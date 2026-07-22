export function caesarCipher(string, key) {
  const normalizedKey = ((key % 26) + 26) % 26;

  return string
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      // Uppercase letters (A-Z: 65-90)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + normalizedKey) % 26) + 65);
      }

      // Lowercase letters (a-z: 97-122)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + normalizedKey) % 26) + 97);
      }

      // Return spaces, punctuation, and numbers unchanged
      return char;
    })
    .join("");
}
