/**
 * @param {number[]} nums
 * @return {number[]}
 */
function leftRightDifference(nums: number[]): number[] {
  const answer: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += nums[j];
    }

    for (let j = i + 1; j < nums.length; j++) {
      rightSum += nums[j];
    }

    answer.push(Math.abs(leftSum - rightSum));
  }

  return answer;
}