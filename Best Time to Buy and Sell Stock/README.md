# 121. Best Time to Buy and Sell Stock

## Pattern

One Pass / Greedy

---

## Algorithm

1. Initialize `bestCost` with the first price to keep track of the lowest buying price seen so far.
2. Initialize `maxProfit` as `0` because no profit is possible before making a transaction.
3. Traverse the `prices` array:
   - If the current price is lower than `bestCost`, update `bestCost`.
   - Calculate the possible profit by subtracting `bestCost` from the current price.
   - If this profit is greater than `maxProfit`, update `maxProfit`.
4. Return `maxProfit`.

---

## Time Complexity

**O(n)**

- The array is traversed only once.
- Each day is processed with constant-time operations.

Overall: **O(n)**

---

## Space Complexity

**O(1)**

- Only a few variables are used:
  - `bestCost`
  - `maxProfit`
  - `profit`
- No additional data structures are created.

---

## Why Greedy?

The greedy idea is to always keep the cheapest buying price seen so far.

Instead of checking every possible buy/sell combination (**O(n²)**), we make the best local decision at each step:
- Buy at the lowest price found so far.
- Sell at the current price and check the profit.

This reduces the solution to a single pass.