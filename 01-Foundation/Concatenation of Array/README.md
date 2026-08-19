# 1929. Concatenation of Array

## Pattern

Array Traversal

---

## Algorithm

1. Create an empty array `ans`.
2. Store the length of the input array in `n`.
3. Traverse the original array once.
4. For each element:
   - Place it at index `i` in `ans`.
   - Place the same element again at index `i + n`.
5. Return the new concatenated array.

---

## Time Complexity

**O(n)**

- The array is traversed only once.
- Each iteration performs two constant-time assignments.

Overall: **O(n)**

---

## Space Complexity

**O(n)**

- A new array of size `2n` is created to store the result.
- Since constants are ignored in Big-O notation, the space complexity is **O(n)**.