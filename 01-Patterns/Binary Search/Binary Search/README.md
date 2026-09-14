# 704. Binary Search

## Pattern

Binary Search

## Algorithm

1. Set `left` to the first index of the array.
2. Set `right` to the last index of the array.
3. While `left` is less than or equal to `right`, calculate the middle index.
4. Compare `target` with the middle element.
5. If `target` is greater, search the right half by moving `left`.
6. If `target` is smaller, search the left half by moving `right`.
7. If the middle element equals `target`, return its index.
8. If the loop ends without finding the target, return `-1`.

## Time Complexity

O(log n)

Each step eliminates approximately half of the remaining search space.

## Space Complexity

O(1)

Only a few variables are used regardless of the input size.

## Pattern Note

The key requirement for **Binary Search** is that the array is sorted.

Instead of checking every element one by one, we look at the middle element and eliminate half of the array after each comparison.

For example:

[1, 3, 5, 7, 9, 11, 13]

If we are searching for `11`:

1. Check `7` → target is larger → ignore the left half.
2. Check `11` → found it.

This is why Binary Search is O(log n), compared with O(n) for a normal linear search.