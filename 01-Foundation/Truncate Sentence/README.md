# 1816. Truncate Sentence

## Pattern

String Traversal

---

## Algorithm

1. Initialize an empty string `result` to store the truncated sentence.
2. Create a counter `count` to track the number of spaces found.
3. Traverse the sentence character by character.
4. When a space is found:
   - Increase the `count`.
   - If `count` reaches `k`, return the current result because `k` words have already been collected.
5. Otherwise, keep adding characters to `result`.
6. If the loop finishes, return the complete result.

---

## Time Complexity

**O(n)**

- The string is traversed once from left to right.
- Each character is processed only once.

Overall: **O(n)**

---

## Space Complexity

**O(n)**

- A new string `result` is created to store the truncated sentence.
- The space depends on the length of the returned string.