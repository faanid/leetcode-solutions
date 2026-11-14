# 1913. Maximum Product Difference Between Two Pairs

## Pattern

Sorting / Single Pass / Min-Max Tracking

## Algorithm

### Solution 1: Sorting

1. Sort the array in ascending order.
2. Select the two largest numbers from the end of the array.
3. Select the two smallest numbers from the beginning of the array.
4. Calculate the product of the two largest numbers.
5. Subtract the product of the two smallest numbers.
6. Return the result.

### Solution 2: Single Pass

1. Initialize two variables for the largest numbers:
   - `max1 = -Infinity`
   - `max2 = -Infinity`
2. Initialize two variables for the smallest numbers:
   - `min1 = Infinity`
   - `min2 = Infinity`
3. Traverse the array once.
4. Update the two largest values:
   - If the current number is greater than `max1`, move `max1` to `max2` and update `max1`.
   - Otherwise, if it is greater than `max2`, update `max2`.
5. Update the two smallest values:
   - If the current number is smaller than `min1`, move `min1` to `min2` and update `min1`.
   - Otherwise, if it is smaller than `min2`, update `min2`.
6. Calculate `max1 * max2 - min1 * min2`.
7. Return the result.

## Time Complexity

### Solution 1

O(n log n)

Sorting takes O(n log n).

### Solution 2

O(n)

The array is traversed only once.

## Space Complexity

### Solution 1

O(log n) auxiliary space in typical JavaScript sorting implementations.

### Solution 2

O(1)

Only four tracking variables are used.

## Pattern Note

The optimized solution uses **Single Pass Min-Max Tracking**.

Instead of sorting the entire array, we maintain only the two largest and two smallest values while traversing it.

The key idea is to track:

- Two maximum values
- Two minimum values

This allows us to calculate the answer in O(n) time without sorting.