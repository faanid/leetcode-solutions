# 1672. Richest Customer Wealth

## Pattern

Brute Force / Nested Loop (Matrix Traversal)

---

## Algorithm

1. Initialize a variable `max` to store the highest wealth found so far.
2. Loop through each customer (each row in the matrix).
3. For each customer, calculate the total wealth by summing all their accounts.
4. Compare the current sum with `max`.
5. If current sum is greater, update `max`.
6. After processing all customers, return `max`.

---

## Time Complexity

**O(m × n)**

- `m` is the number of customers (rows)
- `n` is the number of accounts per customer (columns)
- Every element is visited once

---

## Space Complexity

**O(1)**

Only a constant amount of extra space is used (`max` and `sum` variables)