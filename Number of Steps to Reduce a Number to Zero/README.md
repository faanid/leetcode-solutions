# 1342. Number of Steps to Reduce a Number to Zero

## Pattern

Simulation

---

## Algorithm

1. Initialize a variable `steps` to `0`.
2. Repeat until `num` becomes `0`:
   - If `num` is even, divide it by `2`.
   - Otherwise, subtract `1` from it.
   - Increment `steps`.
3. Return the total number of steps.

---

## Time Complexity

**O(log n)**

- Dividing an even number by `2` quickly reduces its size.
- Although subtraction operations occur, the total number of iterations is proportional to the number of bits in the binary representation of `num`.

Overall: **O(log n)**

---

## Space Complexity

**O(1)**

- Only a constant amount of extra memory is used (`steps`).