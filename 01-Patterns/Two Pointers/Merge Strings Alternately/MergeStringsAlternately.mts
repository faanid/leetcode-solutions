/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1: string, word2: string): string {
  let result = "";
  let word1Pointer = 0;
  let word2Pointer = 0;

  while (word1Pointer < word1.length || word2Pointer < word2.length) {
    if (word1Pointer < word1.length) {
      result += word1[word1Pointer];
      word1Pointer++;
    }

    if (word2Pointer < word2.length) {
      result += word2[word2Pointer];
      word2Pointer++;
    }
  }

  return result;
}