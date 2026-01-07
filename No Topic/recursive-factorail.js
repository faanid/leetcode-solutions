function recursiveFactorial(n){
    if(n === 0) return 1; //base case when n is 0, return 1
    return n * recursiveFactorial(n-1); //recursive case (n! = n * (n-1)!)
}

console.log(recursiveFactorial(0)); //1
console.log(recursiveFactorial(1)); //1
console.log(recursiveFactorial(5)); //120
console.log(recursiveFactorial(10)); //3628800

//Big O analysis
//time complexity = O(n) linear time complexity due to n recursive calls
//space complexity = O(n) linear space complexity due to the call stack in recursion