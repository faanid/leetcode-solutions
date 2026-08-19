# 392. Is Subsequence

## Pattern

Two Pointers

---

## Algorithm

1. Create two pointers:
   - `sPointer` to track the current character in string `s`.
   - `tPointer` to track the current character in string `t`.

2. Traverse string `t` using `tPointer`.

3. For each character:
   - If `s[sPointer]` matches `t[tPointer]`, move both pointers forward.
   - Otherwise, only move `tPointer` forward.

4. After scanning `t`, check whether all characters in `s` have been matched.
   - If `sPointer` reached `s.length`, return `true`.
   - Otherwise, return `false`.

---

## Time Complexity

**O(n)**

- `t` is traversed once.
- `n` represents the length of string `t`.
- Each character is processed only once.

Overall: **O(n)**

---

## Space Complexity

**O(1)**

- Only two pointer variables are used.
- No additional data structures are created.

---

## Why Two Pointers?

The two pointers allow us to compare both strings in a single pass:

- `sPointer` moves only when a matching character is found.
- `tPointer` always moves forward to search for the next possible match.

This avoids creating new strings or using extra memory.