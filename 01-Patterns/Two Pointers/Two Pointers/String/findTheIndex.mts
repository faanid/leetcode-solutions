function strStr(haystack: string, needle: string): number {
    let n = haystack.length;
    let m = needle.length;
    let j;

    for (let i = 0; i < n; i++) { // O(n)
        j = 0;
        if (haystack[i] === needle[j]) {
            let foundNeedleInHaystack = true;
            for (let ptr = i; ptr < m+i; ptr++) { // O(m)
                if (haystack[ptr] !== needle[j]) {
                    foundNeedleInHaystack = false;
                    break;
                }
                j++;
            }
            if (foundNeedleInHaystack) return i;
        }
    }

    // O(n*m)
    return -1;
};