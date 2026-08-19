/**
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain: number[]): number {
  let point = 0;
  let max = 0;

  for (let i = 0; i < gain.length; i++) {
    point += gain[i];

    if (max < point) {
      max = point;
    }
  }

  return max;
}