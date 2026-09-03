# 268. Missing Number

## Pattern

Bit Manipulation (XOR)

## Algorithm

1. Initialize `result` to `0`.
2. Loop through the array.
3. XOR `result` with the current index and the current number.
4. After the loop, XOR `result` with `nums.length` to include the last number in the range.
5. Every number that appears both in the expected range and in the array cancels out because `x ^ x = 0`.
6. The only number left is the missing number.
7. Return `result`.

## Time Complexity

O(n)

## Space Complexity

O(1)

## Pattern Note

The key idea is XOR cancellation:

- `x ^ x = 0`
- `x ^ 0 = x`

The array contains numbers from `0` to `n` with exactly one missing. By XORing all indices and all array values together, every existing number cancels out, leaving only the missing number.