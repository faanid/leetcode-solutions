/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j] && !result.includes(nums1[i])) {
        result.push(nums1[i]);
      }
    }
  }

  return result;
}