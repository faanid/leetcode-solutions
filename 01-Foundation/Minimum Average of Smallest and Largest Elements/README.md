# 3194. Minimum Average of Smallest and Largest Elements

## Pattern

Sorting + Two Pointers

---

## Algorithm

1. Sort the array in ascending order.
2. Initialize two pointers:
   - `left` at the beginning of the array.
   - `right` at the end of the array.
3. Compute the average of the first and last elements and store it as `minAverage`.
4. While `left` is less than `right`:
   - Calculate the average of `nums[left]` and `nums[right]`.
   - If the current average is smaller than `minAverage`, update `minAverage`.
   - Move `left` one step to the right.
   - Move `right` one step to the left.
5. Return `minAverage`.

---

## Time Complexity

**O(n log n)**

- Sorting the array takes **O(n log n)**.
- The two-pointer traversal takes **O(n)**.
- The sorting step dominates the total complexity.

Overall: **O(n log n)**

---

## Space Complexity

**O(1)**

- The algorithm uses only a few extra variables (`left`, `right`, `average`, and `minAverage`).
- No additional data structures are created.
- *(Ignoring the internal space used by the sorting implementation.)*