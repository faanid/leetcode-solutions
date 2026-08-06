# 724. Find Pivot Index

## Pattern

Brute Force (Nested Loops)

---

## Algorithm

1. Traverse the array using index `i`.
2. For each index:
   - Calculate the sum of all elements on the left side.
   - Calculate the sum of all elements on the right side.
3. Compare `sumLeft` and `sumRight`.
4. If both sums are equal, return the current index.
5. If no pivot index is found after checking all elements, return `-1`.

---

## Time Complexity

**O(n²)**

- For every index `i`, the algorithm calculates the left and right sums by traversing parts of the array again.
- The nested loops cause repeated work.

Overall: **O(n²)**

---

## Space Complexity

**O(1)**

- Only temporary variables are used:
  - `sumLeft`
  - `sumRight`
- No additional data structures are created.

---

## Alternative Approach

A more optimized solution uses the **Prefix Sum** pattern:

1. Calculate the total sum of the array.
2. Keep a running `leftSum`.
3. For each element:
   - The right sum can be calculated as:
     `totalSum - leftSum - nums[i]`
   - Compare left and right sums.
4. Update `leftSum`.

### Complexity of Optimized Solution

**Time Complexity:** O(n)  
**Space Complexity:** O(1)
