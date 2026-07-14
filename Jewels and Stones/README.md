# 771. Jewels and Stones

## Pattern

Nested Loops (Brute Force)

---

## Algorithm

1. Initialize a variable `count` to `0`.
2. Traverse each character in the `stones` string.
3. For every stone, compare it with each character in the `jewels` string.
4. If a match is found:
   - Increment `count`.
   - Break out of the inner loop since the stone has already been identified as a jewel.
5. After checking all stones, return `count`.

---

## Time Complexity

**O(n × m)**

- `n` is the length of `stones`.
- `m` is the length of `jewels`.
- In the worst case, every stone is compared with every jewel.

---

## Space Complexity

**O(1)**

- Only a constant amount of extra memory is used.

---

## Alternative Solutions

### Using `includes()`

- **Time Complexity:** **O(n × m)**
- **Space Complexity:** **O(1)**

This solution is shorter and easier to read, but `includes()` still performs a linear search for every stone.

### Using `Set`

- **Time Complexity:** **O(n + m)**
- **Space Complexity:** **O(m)**

Convert all jewels into a `Set` first, then check each stone using `has()`, which provides average **O(1)** lookup time. This is the most efficient solution.