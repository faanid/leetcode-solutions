/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumAverage(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  let minAverage = (nums[left] + nums[right]) / 2;

  while (left < right) {
    const average = (nums[left] + nums[right]) / 2;

    if (average <= minAverage) {
      minAverage = average;
    }

    left++;
    right--;
  }

  return minAverage;
}