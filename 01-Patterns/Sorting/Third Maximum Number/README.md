# 414. Third Maximum Number

## Pattern

Single Pass / Top K Tracking

## Algorithm

1. Initialize three variables to track the largest, second largest, and third largest distinct numbers.
2. Traverse the array once.
3. Skip the current number if it already matches one of the three tracked values.
4. If the current number is greater than `first`:
   - Move `second` to `third`.
   - Move `first` to `second`.
   - Assign the current number to `first`.
5. Otherwise, if it is greater than `second`:
   - Move `second` to `third`.
   - Assign the current number to `second`.
6. Otherwise, if it is greater than `third`, assign it to `third`.
7. After processing all numbers:
   - If `third` is still `-Infinity`, return `first`.
   - Otherwise, return `third`.

## Time Complexity

O(n)

We traverse the array exactly once.

## Space Complexity

O(1)

Only three variables are used to track the largest distinct values.

## Pattern Note

This problem uses **Top K Tracking**.

Instead of sorting the entire array, we maintain only the three largest distinct values.

The important part is shifting the values whenever we find a new maximum.

For example:

nums = [2, 2, 3, 1]

The tracked values change as follows:

| Number | First | Second | Third |
|---|---:|---:|---:|
| 2 | 2 | -∞ | -∞ |
| 2 | 2 | -∞ | -∞ |
| 3 | 3 | 2 | -∞ |
| 1 | 3 | 2 | 1 |

The third maximum is `1`.

If fewer than three distinct numbers exist, we return the maximum number instead.