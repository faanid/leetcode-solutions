# 35. Search Insert Position

## Pattern

Binary Search

## Algorithm

1. Set `left` to the first index of the array.
2. Set `right` to the last index of the array.
3. While `left` is less than or equal to `right`, calculate the middle index.
4. Compare `target` with the middle element.
5. If `target` is greater, move `left` to `middle + 1`.
6. If `target` is smaller, move `right` to `middle - 1`.
7. If the target is found, return its index.
8. If the loop ends without finding the target, return `left`.
9. At this point, `left` is exactly the position where the target should be inserted to keep the array sorted.

## Time Complexity

O(log n)

Each iteration eliminates approximately half of the search space.

## Space Complexity

O(1)

Only a constant number of variables are used.

## Pattern Note

This problem uses the same **Binary Search** pattern as finding an element in a sorted array.

The important difference is the final step:

```text
return left;