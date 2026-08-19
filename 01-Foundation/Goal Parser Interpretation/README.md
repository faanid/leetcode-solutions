# 1678. Goal Parser Interpretation

## Pattern

String Traversal / Pattern Matching

---

## Algorithm

1. Initialize an empty string `result` to store the interpreted command.
2. Traverse the command string character by character.
3. Check the current character:
   - If it is `G`, add `"G"` to the result.
   - If the pattern is `"()"`, add `"o"` and skip the next character.
   - If the pattern is `"(al)"`, add `"al"` and skip the processed characters.
4. Continue until the entire command string is processed.
5. Return the final interpreted string.

---

## Time Complexity

**O(n)**

- The string is traversed once.
- Each character is processed a constant number of times.
- Skipping characters does not change the overall linear complexity.

Overall: **O(n)**

---

## Space Complexity

**O(n)**

- A new string `result` is created to store the interpreted command.
- The output size grows based on the input length.