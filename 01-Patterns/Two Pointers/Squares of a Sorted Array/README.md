# 977. Squares of a Sorted Array

## Pattern

Two Pointers

## Algorithm

1. Create two pointers:
   - `left` starts at the beginning.
   - `right` starts at the end.
2. Create a result array and start filling it from the last position.
3. Calculate the square of the values at `left` and `right`.
4. Compare the two squared values.
5. Put the larger square at the current `position` in the result array.
6. Move the pointer that produced the larger square.
7. Move `position` one step to the left.
8. Continue until the two pointers cross.
9. Return the result array.

## Time Complexity

O(n)

Each element is processed exactly once.

## Space Complexity

O(n)

The result array contains `n` elements.

## Pattern Note

This is a **Two Pointers** problem.

The input array is already sorted, but negative numbers make the squared values no longer sorted.

For example:

[-4, -1, 0, 3, 10]

The largest square must come from either the leftmost or rightmost element:

- `(-4)² = 16`
- `10² = 100`

So we compare both ends and place the larger square at the end of the result array.

We fill the result from **right to left** because we always know which value produces the largest remaining square.