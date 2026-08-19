function removeElement(nums: number[], val: number): number {
    let n = nums.length;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        if (nums[right] === val) { right--; continue; }
        if (nums[left] === val) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }
        left++;
    }
    return left;
};