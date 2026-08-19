# 2798. Number of Employees Who Met the Target

## Pattern

Array Traversal

---

## Algorithm

1. Initialize a variable `count` to `0`.
2. Traverse the `hours` array.
3. For each employee, check whether the number of worked hours is greater than or equal to `target`.
4. If the condition is true, increment `count`.
5. After checking all employees, return `count`.

---

## Time Complexity

**O(n)**

- The array is traversed once.
- Each iteration performs a constant-time comparison.

Overall: **O(n)**

---

## Space Complexity

**O(1)**

- Only one extra variable (`count`) is used regardless of the input size.