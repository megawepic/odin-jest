export function reverseString(str) {
  let reverse = Array.prototype.reduce.call(str, (acc, char) => char + acc, "");
  return reverse;
}
