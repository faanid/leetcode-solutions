function isAlphaNumeric(character: string) {
    return /^[a-zA-Z0-9]$/.test(character); // Time: O(1)
}

function reverseStr(str: string) {
    let rev = ""; // Space: O(n)
    for (let i = str.length - 1; i >= 0; i--) rev += str[i]; // Time: O(n)
    return rev;
}

function isPalindrome_NOT_OPTIMIZED(s: string): boolean {
    // n = s.length
    let cleanStr = "" // Space: O(n), Time: O(1)

    for (let i = 0; i < s.length; i++) { // Time: O(n)
        if (isAlphaNumeric(s[i])) { // Time: O(1)
            cleanStr += s[i].toLowerCase() // Time: O(1)
        }
    }

    const reversedStr = reverseStr(cleanStr); // Time: O(n), Space: O(n)

    // Time & Space: O(2*n) ~ O(n)
    return reversedStr === cleanStr; // Time: O(1)
};


// -------------------------------------------------------------------------------
// second solution

function isPalindrome(s: string): boolean {
    let n = s.length; // Space: O(1)
    let left = 0; // Space: O(1)
    let right = n - 1; // Space: O(1)

    while (left < right) { // O(n)
        while (left < n && !isAlphaNumeric(s[left])) left++; 
        while (right > 0 && !isAlphaNumeric(s[right])) right--; 

        if (left >= right) break;

        if (s[left]?.toLowerCase() === s[right]?.toLowerCase()) {
            left++;
            right--;
        } else return false;
    }

    // Space: O(3*1) ~ O(1)
    // Time: O(n)
    return true;
};