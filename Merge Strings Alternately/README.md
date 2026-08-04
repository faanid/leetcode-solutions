# 1768. Merge Strings Alternately

## Pattern

Two Pointers

---

## Algorithm

1. Create an empty string `result`.
2. Initialize two pointers:
   - `word1Pointer` for `word1`
   - `word2Pointer` for `word2`
3. Repeat while either pointer has not reached the end of its string:
   - If `word1Pointer` is still within `word1`, append the current character to `result` and move the pointer forward.
   - If `word2Pointer` is still within `word2`, append the current character to `result` and move the pointer forward.
4. Continue until both strings have been completely processed.
5. Return the merged string.

---

## Time Complexity

**O(n + m)**

- `n` is the length of `word1`.
- `m` is the length of `word2`.
- Each character from both strings is visited exactly once.

Overall: **O(n + m)**

---

## Space Complexity

**O(n + m)**

- A new string is created to store the merged result.
- The length of the result is `n + m`.

---

## Why Two Pointers?

Each pointer tracks the current position in one string.

- `word1Pointer` processes characters from `word1`.
- `word2Pointer` processes characters from `word2`.

By advancing the pointers independently, the algorithm alternates characters efficiently and naturally handles strings of different lengths without any extra loops.