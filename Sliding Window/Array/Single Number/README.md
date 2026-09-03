# 136. Single Number

## Pattern

Bit Manipulation (XOR)

---

## Algorithm 

1. Initialize `result` with `0`.
2. Traverse every number in the array.
3. Apply the XOR (`^`) operation between `result` and the current number.
4. Store the result back in `result`.
5. Return `result`.

The important XOR properties are:

- `a ^ a = 0`
- `a ^ 0 = a`
- XOR is commutative and associative.

Therefore, every number that appears twice cancels itself out, leaving only the number that appears once.

Example:

```text
[4, 1, 2, 1, 2]

0 ^ 4 ^ 1 ^ 2 ^ 1 ^ 2
= 4
```

---

## Time Complexity

**O(n)**

- Every element is visited exactly once.
- XOR takes constant time.

---

## Space Complexity

**O(1)**

- Only the `result` variable is used.
- No additional data structures are required.

---

## Pattern Note

This problem uses **Bit Manipulation**, specifically the **XOR** operation.

Instead of using a `Set` or sorting the array, XOR allows duplicate numbers to cancel each other automatically.

This gives an optimal solution with:

**O(n) time + O(1) extra space**