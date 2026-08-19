# 217. Contains Duplicate

## Pattern

Hash Set

---

## Algorithm

1. Create an empty `Set`.
2. Traverse the array.
3. For each number:
   - If it already exists in the `Set`, return `true`.
   - Otherwise, add it to the `Set`.
4. If the loop finishes without finding any duplicates, return `false`.

---

## Time Complexity

### Current Solution (Hash Set)

**O(n)**

- Each element is visited once.
- `Set.has()` and `Set.add()` take **O(1)** on average.

Overall: **O(n)**

### Alternative Solution (Nested Loops)

**O(n²)**

- Compare every element with all elements after it.
- In the worst case, every pair is checked.

---

## Space Complexity

### Current Solution (Hash Set)

**O(n)**

- In the worst case, every element is stored in the `Set`.

### Alternative Solution (Nested Loops)

**O(1)**

- No extra data structures are used.

---

## Why Use a Hash Set?

A `Set` stores only unique values.

- If a number has not been seen before, add it to the `Set`.
- If it already exists, a duplicate has been found, so return `true` immediately.

This reduces the time complexity from **O(n²)** to **O(n)** by trading extra memory for faster lookups.