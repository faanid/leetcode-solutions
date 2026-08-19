# 2535. Difference Between Element Sum and Digit Sum of an Array

## Pattern

Array Traversal + Digit Extraction

---

## Algorithm

1. Initialize two variables:
   - `elementSum` to store the sum of all array elements.
   - `digitSum` to store the sum of all individual digits.
2. Traverse the array.
3. For each number:
   - Add the number to `elementSum`.
   - Convert the number to a string.
   - Traverse each character (digit) in the string.
   - Convert each digit back to a number and add it to `digitSum`.
4. Return the absolute difference between `elementSum` and `digitSum`.

---

## Time Complexity

**O(n × d)**

- `n` is the number of elements in the array.
- `d` is the average number of digits per number.
- Each number is processed once, and each of its digits is visited once.

---

## Space Complexity

**O(d)**

- Converting a number to a string creates a temporary string whose size depends on the number of digits.
- Aside from that temporary string, only a constant amount of extra memory is used.