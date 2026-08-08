/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s: string): number {
  const words = s.trim().split(" ").filter((word) => word !== "");
  const lastWord = words[words.length - 1];

  return lastWord.length;
}