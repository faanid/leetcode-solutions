/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }

    if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0) {
        return false;
      }

      const last = stack[stack.length - 1];

      if (char === ")" && last !== "(") {
        return false;
      }

      if (char === "]" && last !== "[") {
        return false;
      }

      if (char === "}" && last !== "{") {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}