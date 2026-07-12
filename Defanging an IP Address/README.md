# 1108. Defanging an IP Address

## Pattern

String Traversal

---

## Algorithm

1. Create an empty string called `result`.
2. Traverse the input string character by character.
3. If the current character is a dot (`.`), append `"[.]"` to `result`.
4. Otherwise, append the current character.
5. Continue until the entire string has been processed.
6. Return the modified string.

---

## Time Complexity

**O(n)**

- The string is traversed once.
- Each character is processed exactly one time.

Overall: **O(n)**

---

## Space Complexity

**O(n)**

- A new string is created to store the modified IP address.
- The output size is proportional to the length of the input.