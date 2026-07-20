/**
 * @param {number[]} nums
 * @return {number}
 */
function differenceOfSum(nums: number[]): number {
  let elementSum = 0;
  let digitSum = 0;

  for (let i = 0; i < nums.length; i++) {
    elementSum += nums[i];

    const str = String(nums[i]);

    for (let j = 0; j < str.length; j++) {
      digitSum += Number(str[j]);
    }
  }

  return Math.abs(elementSum - digitSum);
}