# 1351. Count Negative Numbers in a Sorted Matrix

## Pattern

Matrix Traversal (Nested Loops)

---

## Algorithm

1. Initialize a variable `count` to `0`.
2. Traverse each row of the matrix.
3. For each row, traverse every column.
4. If the current number is negative, increment `count`.
5. After visiting every element in the matrix, return `count`.

---

## Time Complexity

**O(m × n)**

- `m` is the number of rows.
- `n` is the number of columns.
- Every element in the matrix is visited exactly once.

---

## Space Complexity

**O(1)**

- Only one extra variable (`count`) is used.
- No additional data structures are created.