# 1512. Number of Good Pairs

## Pattern

Brute Force (Nested Loops)

---

## Algorithm

1. Create a variable `count` and initialize it to `0`.
2. Iterate through the array using the first loop (`i`).
3. For each element, iterate over all elements after it using the second loop (`j = i + 1`).
4. If `nums[i]` is equal to `nums[j]`, increment `count`.
5. After checking all possible pairs, return `count`.

---

## Time Complexity

**O(n²)**

- The outer loop runs `n` times.
- For each element, the inner loop compares it with the remaining elements.
- Total comparisons are approximately `n(n - 1) / 2`.

---

## Space Complexity

**O(1)**

Only one extra variable (`count`) is used regardless of the input size.