# 70. Climbing Stairs

## Pattern

Dynamic Programming (Bottom-Up)

---

## Algorithm

1. If `n` is `1` or `2`, return `n` directly.
2. Keep track of the number of ways to reach the previous two steps:
   - `prev2 = 1`
   - `prev1 = 2`
3. Starting from step `3`, calculate the current number of ways:
   - `current = prev1 + prev2`
4. Move the previous values forward:
   - `prev2 = prev1`
   - `prev1 = current`
5. Continue until reaching step `n`.
6. Return `prev1`.

The reason we add the previous two values is that to reach step `n`, we can only come from:
- step `n - 1` by taking 1 step
- step `n - 2` by taking 2 steps

So:

`ways(n) = ways(n - 1) + ways(n - 2)`

---

## Time Complexity

**O(n)**

- The loop runs from `3` to `n`.
- Each iteration performs constant-time operations.

---

## Space Complexity

**O(1)**

- Only three variables are used: `prev2`, `prev1`, and `current`.
- We do not use an array to store all previous results.

---

## Pattern Note

This is a classic **Dynamic Programming** problem.

A straightforward DP solution would store the number of ways for every step in an array, resulting in **O(n)** space.

However, each step only depends on the previous two values, so we can optimize the space to **O(1)** by keeping only those two values.

This is also closely related to the **Fibonacci sequence**.