# 1470. Shuffle the Array

## Pattern

Two Pointers / Parallel Traversal

---

## Algorithm

1. Create an empty array called `result`.
2. Traverse the first half of the array from index `0` to `n - 1`.
3. For each index `i`:
   - Add `nums[i]` to the result.
   - Add `nums[i + n]` to the result.
4. Continue until all pairs have been processed.
5. Return the `result` array.

---

## Time Complexity

**O(n)**

- The loop runs exactly `n` times.
- Each iteration performs constant-time operations.

Overall: **O(n)**

---

## Space Complexity

**O(n)**

- A new array is created to store the shuffled elements.