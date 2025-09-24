// function decrypt(code: number[], k: number): number[] {
//     const duplicated = [...code, ...code]; //O(2*n)
//     const n = code.length;
//     const decrypted = Array.from({ length: n }, () => 0); //O(n)

//     for (let i = 0; i < n; i++) { //O(n)
//         if (k > 0) {
//             //for loop time complexity: O(n-1)
//             for (let j = i + 1; j <= i + k; j++) decrypted[i] += duplicated[j];
//         } else if (k < 0) {
//             //for loop time complexity: O(n-1)
//             for (let j = i + n + k; j < i + n; j++) decrypted[i] += duplicated[j];
//         } else {
//             break;
//         }
//     }

//     //time complexity: O(n^2-n) ~ O(n^2)
//     //space complexity: O(3*n) ~ O(n)

//     return decrypted;
// };


// ---------------------------------------------------------------
// second solution
function decrypt(code: number[], k: number): number[] {
    const duplicated = [...code, ...code]; // Space: O(2*n)
    const n = code.length;
    const decrypted = Array.from({ length: n }, () => 0); // Space: O(n)
    const prefixSum = Array.from({ length: 2*n }, () => 0); // Space: O(2*n)

    prefixSum[0] = code[0];
    
    for (let i = 1; i < 2*n; i++) {
        prefixSum[i] += prefixSum[i-1] + duplicated[i];
    }

// prefix sum is computed! 

    for (let i = 0; i < n; i++) { // O(n)
        if (k > 0) {
            decrypted[i] = prefixSum[i+k] - prefixSum[i];
        } else if (k < 0) {
            const absK = -k;
            decrypted[i] = prefixSum[i+n-1] - prefixSum[i+n-absK-1];
        } else {
            break;
        }
    }

    return decrypted;
};