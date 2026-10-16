# 231. Power of Two

## Pattern

Math / Repeated Division

## Algorithm

1. If `n` is less than or equal to `0`, return `false`.
2. While `n` is greater than `1`:
   - If `n` is not divisible by `2`, return `false`.
   - Otherwise, divide `n` by `2`.
3. If `n` becomes `1`, return `true`.

## Time Complexity

O(log n)

Each division by `2` reduces the value until it reaches `1`.

## Space Complexity

O(1)

Only a constant amount of extra space is used.

## Pattern Note

A positive number is a power of two if it can be repeatedly divided by `2` until it reaches `1`, without ever producing a remainder.

Examples:

- `1` → true (2⁰)
- `2` → true (2¹)
- `8` → true (2³)
- `10` → false (not a power of two)

The condition `n % 2 !== 0` detects when the number is no longer evenly divisible by `2`.