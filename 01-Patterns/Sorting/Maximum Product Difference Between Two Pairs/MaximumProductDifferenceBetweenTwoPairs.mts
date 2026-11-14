/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProductDifference(nums: number[]): number {
  nums.sort((a, b) => a - b);

  const min1 = nums[0];
  const min2 = nums[1];

  const max1 = nums[nums.length - 1];
  const max2 = nums[nums.length - 2];

  return max1 * max2 - min1 * min2;
}

// function maxProductDifference(nums: number[]): number {
//   let min1 = Infinity;
//   let min2 = Infinity;

//   let max1 = -Infinity;
//   let max2 = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max1) {
//       max2 = max1;
//       max1 = nums[i];
//     } else if (nums[i] > max2) {
//       max2 = nums[i];
//     }

//     if (nums[i] < min1) {
//       min2 = min1;
//       min1 = nums[i];
//     } else if (nums[i] < min2) {
//       min2 = nums[i];
//     }
//   }

//   return max1 * max2 - min1 * min2;
// }