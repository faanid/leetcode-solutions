/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;

  const resultArray: number[] = [];
  let position = nums.length - 1;

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare < rightSquare) {
      resultArray[position] = rightSquare;
      right--;
    } else {
      resultArray[position] = leftSquare;
      left++;
    }

    position--;
  }

  return resultArray;
}