# 118. Pascal's Triangle

## Pattern
Dynamic Programming / Array Construction

## Algorithm
1. Create an empty result array to store all rows.
2. Iterate from 0 to numRows - 1.
3. Create a new empty row.
4. Set the first and last elements of the row to 1.
5. If the row has more than two elements:
   - Get the previous row.
   - Calculate each middle element by adding the two elements directly above it.
6. Add the completed row to the result.
7. Return the result.

## Time Complexity
O(n²) - Each row is constructed by iterating through its elements.

## Space Complexity
O(n²) - The result stores all elements of Pascal's Triangle.

## Pattern Note
Each element in Pascal's Triangle is the sum of the two elements directly above it.

For example:
- Row 1: [1]
- Row 2: [1, 1]
- Row 3: [1, 2, 1]
- Row 4: [1, 3, 3, 1]