# 350. Intersection of Two Arrays II

## Pattern

Hash Map / Frequency Counter

## Algorithm

1. Create a `Map` to store how many times each number appears in `nums1`.
2. Loop through `nums1` and increase the frequency of each number.
3. Create an empty `result` array.
4. Loop through `nums2`.
5. If the current number exists in the map with a count greater than `0`, add it to `result`.
6. Decrease its count in the map because one occurrence has been used.
7. Return `result`.

## Time Complexity

O(n + m)

Where:
- `n` = length of `nums1`
- `m` = length of `nums2`

## Space Complexity

O(n)

The map can contain up to `n` unique numbers from `nums1`.

## Pattern Note

This is a **Hash Map / Frequency Counter** problem because we need to keep track of how many times each number appears.

For example:

nums1 = [1, 2, 2, 3]

The map becomes:

1 → 1
2 → 2
3 → 1

When processing `nums2`, every time we find a number with a positive count, we add it to the result and decrease its count.

This allows duplicates to be included only as many times as they appear in both arrays.