# 125. Valid Palindrome

## Pattern

Two Pointers + String Processing

---

## Algorithm

1. Convert the string to lowercase.
2. Remove all characters that are not letters or numbers using a regular expression.
3. Initialize two pointers:
   - `left` at the beginning.
   - `right` at the end.
4. Compare the characters at both pointers.
5. If they are different, return `false`.
6. If they are equal, move `left` forward and `right` backward.
7. Continue until the pointers meet.
8. If no mismatch is found, return `true`.

---

## Time Complexity

**O(n)**

- The string is processed once for cleaning.
- The two-pointer traversal also takes O(n).
- Overall complexity remains **O(n)**.

---

## Space Complexity

**O(n)**

- `replace()` creates a new cleaned string.
- The extra string requires space proportional to the input size.

---

## Pattern Note

This is a classic **Two Pointers** problem.

The two pointers start from opposite ends of the string and move toward the center while comparing corresponding characters. This avoids using another array or reversing the string.