/**
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let j = 0; j < i; j++) {
      sumLeft += nums[j];
    }

    for (let j = i + 1; j < nums.length; j++) {
      sumRight += nums[j];
    }

    if (sumLeft === sumRight) {
      return i;
    }
  }

  return -1;
}