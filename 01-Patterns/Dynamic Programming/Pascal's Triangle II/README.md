# 119. Pascal's Triangle II

## Pattern
Dynamic Programming / In-Place Array Update

## Algorithm
1. Initialize the row with [1].
2. Repeat rowIndex times:
   - Append 1 to the end of the row.
   - Iterate backward from the second-to-last element to index 1.
   - Update each element by adding the element directly before it.
3. Return the completed row.

## Time Complexity
O(n²) - Each iteration updates the elements of the current row.

## Space Complexity
O(n) - Only the requested row is stored.

## Pattern Note
Each element is calculated by adding the two elements directly above it.

The array must be updated from right to left. This prevents overwriting values that are still needed for the next calculation.

For example:

[1, 2, 1]
       ↓
[1, 3, 3, 1]