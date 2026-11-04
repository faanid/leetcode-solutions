# 1502. Can Make Arithmetic Progression From Sequence

## Pattern

Sorting / Array Traversal

## Algorithm

1. Sort the array in ascending order.
2. Calculate the difference between the first two elements.
3. Loop through the remaining elements starting from index `2`.
4. Compare the difference between each pair of consecutive elements with the initial difference.
5. If any difference is different, return `false`.
6. If all differences are equal, return `true`.

## Time Complexity

O(n log n)

Sorting takes O(n log n), and checking consecutive differences takes O(n).

## Space Complexity

O(log n)

The sorting algorithm may use additional space depending on its implementation.

## Pattern Note

An arithmetic progression is a sequence where the difference between every two consecutive elements is constant.

For example:

[3, 5, 7, 9, 11]

Differences:

5 - 3 = 2
7 - 5 = 2
9 - 7 = 2
11 - 9 = 2

Since all differences are equal, the array forms an arithmetic progression.

Sorting first is important because the original array can contain numbers in any order.