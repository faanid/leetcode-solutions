function truncateSentence(s: string, k: number): string {
  let result = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      count++;

      if (count === k) {
        return result;
      }
    }

    result += s[i];
  }

  return result;
}