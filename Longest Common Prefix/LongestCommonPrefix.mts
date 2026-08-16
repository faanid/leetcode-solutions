/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs: string[]): string {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== strs[0][i]) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}