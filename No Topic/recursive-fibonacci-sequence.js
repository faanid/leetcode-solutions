function recursiveFibonacci(n) {
    if (n < 2) return n; //base case
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2); //recursive case

}

console.log(recursiveFibonacci(0));  //0
console.log(recursiveFibonacci(1));  //1
console.log(recursiveFibonacci(2));  //1
console.log(recursiveFibonacci(3));  //2
console.log(recursiveFibonacci(4));  //3

//Big O analysis
//time complexity = O(2^n) exponential time complexity due to the binary tree of recursive calls
//space complexity = O(n) linear space complexity due to the call stack in recursion