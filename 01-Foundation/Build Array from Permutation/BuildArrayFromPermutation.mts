function buildArray(nums: number[]): number[] {
  const ans: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const index = nums[i];
    ans.push(nums[index]);
  }

  return ans;
}