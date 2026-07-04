# 1920. Build Array from Permutation

## Pattern

Array Index Mapping

---

## Algorithm

1. Create an empty array called `ans`.
2. Traverse the input array.
3. For each position `i`, use `nums[i]` as an index.
4. Take the value at `nums[nums[i]]` and append it to `ans`.
5. After processing all elements, return `ans`.

---

## Time Complexity

**O(n)**

- The array is traversed once.
- Each iteration performs constant-time operations.

Overall: **O(n)**

---

## Space Complexity

**O(n)**

- A new array of size `n` is created to store the result.