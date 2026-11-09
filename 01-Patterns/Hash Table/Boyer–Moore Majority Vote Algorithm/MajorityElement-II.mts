function majorityElement(nums: number[]): number[] {
  let candidate1: number | undefined;
  let candidate2: number | undefined;

  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate1) {
      count1++;
    } else if (nums[i] === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = nums[i];
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = nums[i];
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  let realCount1 = 0;
  let realCount2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate1) {
      realCount1++;
    }

    if (nums[i] === candidate2) {
      realCount2++;
    }
  }

  const result: number[] = [];
  const threshold = Math.floor(nums.length / 3);

  if (realCount1 > threshold) {
    result.push(candidate1!);
  }

  if (realCount2 > threshold) {
    result.push(candidate2!);
  }

  return result;
}