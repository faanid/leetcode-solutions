/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result = result ^ i ^ nums[i];
  }

  result = result ^ nums.length;

  return result;
}