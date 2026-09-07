/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      map.set(nums1[i], map.get(nums1[i])! + 1);
    } else {
      map.set(nums1[i], 1);
    }
  }

  const result: number[] = [];

  for (let i = 0; i < nums2.length; i++) {
    if ((map.get(nums2[i]) ?? 0) > 0) {
      result.push(nums2[i]);

      map.set(nums2[i], map.get(nums2[i])! - 1);
    }
  }

  return result;
}