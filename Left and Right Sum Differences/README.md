# 2574. Left and Right Sum Differences

## Pattern

Brute Force (Nested Loops)

---

## Algorithm

1. Create an empty array `answer`.
2. Traverse the array using index `i`.
3. For each index:
   - Calculate the sum of all elements to the left of `i`.
   - Calculate the sum of all elements to the right of `i`.
4. Find the absolute difference between the left and right sums.
5. Append the result to `answer`.
6. Return the `answer` array after processing every index.

---

## Time Complexity

**O(n²)**

- For each element, the algorithm traverses the left and right portions of the array.
- The total number of operations grows quadratically with the input size.

---

## Space Complexity

**O(n)**

- A new array is created to store the result.
- Apart from the output array, only a constant amount of extra memory is used.
