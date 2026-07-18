/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  let count = 0;
  let index: number = 0;

  if (ruleKey === "type") {
    index = 0;
  } else if (ruleKey === "color") {
    index = 1;
  } else if (ruleKey === "name") {
    index = 2;
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i][index] === ruleValue) {
      count++;
    }
  }

  return count;
}