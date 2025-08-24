function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m-1;
    let j = n-1;
    let write = m+n-1;

    while (j >= 0) { // Worst Case Scenario: Runs `m+n-2` times ~ O(m+n-2) => Time Complexity ~ O(m+n)
        if (i >= 0 && nums1[i] >= nums2[j]) { // Worst Case Scenario: Runs `m-1` times
            nums1[write] = nums1[i];
            i--; // `i` decrements from `m-1` to `0`
        } else { // Worst Case Scenario: Runs `n-1` times
            nums1[write] = nums2[j];
            j--; // `j` decrements from `n-1` to `0`
        }
        write--;
    }
};