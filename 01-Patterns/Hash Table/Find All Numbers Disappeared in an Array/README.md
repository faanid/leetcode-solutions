# 448. Find All Numbers Disappeared in an Array

## Pattern

Hash Set / Lookup

## Algorithm

1. Create a `Set` from the input array to store all existing numbers.
2. Create an empty `result` array.
3. Iterate from `1` to `nums.length`.
4. For each number, check whether it exists in the set.
5. If the number does not exist, add it to the result array.
6. Return the result array.

## Time Complexity

O(n)

- Creating the set takes O(n) average time.
- Checking all numbers takes O(n) average time.

## Space Complexity

O(n)

The set can store up to `n` unique numbers, and the result array can also contain up to `n` numbers.

## Pattern Note

This problem uses the **Hash Set** pattern for fast lookups.

The key idea is to use a set to check whether a number exists without repeatedly searching through the original array.

For example:

nums = [4, 3, 2, 7, 8, 2, 3, 1]

Expected range:

[1, 2, 3, 4, 5, 6, 7, 8]

Missing numbers:

[5, 6]

A `Set` automatically removes duplicates, making existence checks efficient.