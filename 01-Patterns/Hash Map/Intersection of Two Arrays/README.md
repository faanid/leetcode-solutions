# 349. Intersection of Two Arrays

## Pattern

Nested Loops + Duplicate Check

---

## Algorithm

1. Create an empty `result` array.
2. Traverse every element of `nums1`.
3. For each element, traverse `nums2` and look for a match.
4. If a match is found, check whether the value is already in `result`.
5. If it is not already present, add it to `result`.
6. Return `result`.

---

## Time Complexity

**O(n × m × k)**

- `n` = length of `nums1`
- `m` = length of `nums2`
- `k` = size of `result`
- The nested loops perform `O(n × m)` comparisons.
- `result.includes()` can take `O(k)` in the worst case.

Overall: **O(n × m × k)**

In the worst case, this can become **O(n² × m)** depending on the relationship between the input sizes.

---

## Space Complexity

**O(k)**

- `result` stores the unique intersection values.
- In the worst case, `k` can be proportional to the smaller input array.

---

## Pattern Note

This solution combines **Nested Loops** with a **Duplicate Check**.

The nested loops find common values between the two arrays, while `result.includes()` ensures that each value is added only once.

A more efficient solution can use a **Set** to reduce the lookup complexity.