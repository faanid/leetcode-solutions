# 283. Move Zeroes

## Pattern

Two Pointers

---

## Algorithm

1. Create a `writePointer` starting at index `0`.
2. Traverse the array using a `readPointer`.
3. For each element:
   - If the value is not `0`, copy it to the position indicated by `writePointer`.
   - Move `writePointer` forward.
4. After all non-zero elements have been moved, fill the remaining positions (from `writePointer` to the end of the array) with `0`.
5. The array is modified in-place, so no value is returned.

---

## Time Complexity

**O(n)**

- The first loop moves all non-zero elements.
- The second loop fills the remaining positions with zeros.
- Each element is processed at most once.

Overall: **O(n)**

---

## Space Complexity

**O(1)**

- The algorithm modifies the input array directly.
- Only a few extra variables (`writePointer` and `readPointer`) are used.

---

## Why Two Pointers?

- `readPointer` scans every element in the array.
- `writePointer` keeps track of where the next non-zero element should be placed.
- This allows all non-zero values to be shifted forward while preserving their original order, without using an extra array.