# 202. Happy Number

## Pattern

Hash Set / Cycle Detection

## Algorithm

1. Create a `Set` to store numbers that we have already seen.
2. While `n` is not `1`:
   - Check if `n` has already been seen.
   - If it has, a cycle exists, so return `false`.
   - Add `n` to the set.
3. Calculate the sum of the squares of all digits of `n`.
4. Assign the calculated sum back to `n`.
5. Repeat the process.
6. If `n` becomes `1`, return `true`.

## Time Complexity

O(log n)

The number of digits determines how many operations are needed to calculate the sum of squared digits. After several iterations, the values become small and the process either reaches `1` or enters a cycle.

## Space Complexity

O(log n)

The `Set` stores the numbers encountered during the process.

## Pattern Note

This problem uses **Hash Set + Cycle Detection**.

The important idea is that an unhappy number eventually enters a cycle.

For example, if the process produces:

```text
2 → 4 → 16 → 37 → ... → 2