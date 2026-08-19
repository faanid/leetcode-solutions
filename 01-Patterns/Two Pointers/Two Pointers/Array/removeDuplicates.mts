function removeDuplicates(nums: number[]): number {
    const n = nums.length;
    if(n==1) return 1;
   let iw = 0;
   let ptr = 1;

   while(ptr < n) {
    while(nums[ptr]=== nums[iw]) {
        ptr++;
        if(ptr >= n) break;
        continue;
    };
    

    iw++;
    nums[iw] = nums[ptr]
   }

   return iw;
};