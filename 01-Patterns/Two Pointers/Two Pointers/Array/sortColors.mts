function sortColors(nums: number[]): void {
    // nums = [2, 0, 2, 1, 1, 0]
    let counts = { 0: 0, 1: 0, 2: 0 }
    let n = nums.length

    for (let i = 0; i < n; i++) counts[nums[i]]++;

    // counts = { 
    //     0: 2,
    //     1: 2,
    //     2: 2
    // }

    let write = 0;

    for (let i = 0; i < 3; i++) { // 0, 1, 2
        // i = 0 | 1 | 2
        for (let j = 0; j < counts[i]; j++) {
            nums[write] = i;
            write++;
        }
    }
};