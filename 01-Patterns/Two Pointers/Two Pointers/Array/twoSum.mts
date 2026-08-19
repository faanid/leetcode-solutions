function twoSum(numbers: number[], target: number): number[] {
const n = numbers.length;
    for (let i = 0; i < n; i++) { // Time: O(n)
        for (let j = i+1; j < n; j++) { // Time: O(n)
            if (target === numbers[i] + numbers[j]) {
                return [i+1, j+1];
            }
        }
    }
    return []; 
    // Time Complexity: O(n^2)
};