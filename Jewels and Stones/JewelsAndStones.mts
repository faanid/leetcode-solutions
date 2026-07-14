/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels: string, stones: string): number {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (jewels[j] === stones[i]) {
        count++;
        break;
      }
    }
  }

  return count;
}

// function numJewelsInStones(jewels: string, stones: string): number {
//   let count = 0;

//   for (let i = 0; i < stones.length; i++) {
//     if (jewels.includes(stones[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// function numJewelsInStones(jewels: string, stones: string): number {
//   const jewelSet = new Set<string>(jewels);
//   let count = 0;

//   for (let i = 0; i < stones.length; i++) {
//     if (jewelSet.has(stones[i])) {
//       count++;
//     }
//   }

//   return count;
// }