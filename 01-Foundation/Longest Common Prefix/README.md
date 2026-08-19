# 14. Longest Common Prefix

## Pattern

Horizontal String Traversal / Character Comparison

---

## Algorithm

1. Use the first string as the reference.
2. Traverse each character of the first string using index `i`.
3. For every character position, compare it with the character at the same position in all strings.
4. If:
   - A string is shorter than the current index, or
   - The characters do not match,
   
   return the prefix from index `0` up to `i`.
5. If all characters of the first string match in every string, return the entire first string.

---

## Time Complexity

**O(n × m)**

- `n` is the number of strings.
- `m` is the length of the first string, or the length of the shortest prefix checked.
- For each character position, the algorithm may compare that character across all strings.

Overall: **O(n × m)**

---

## Space Complexity

**O(1)**

- No additional data structures are created.
- Only loop variables are used.

---

## Pattern Note

This solution uses a **Character-by-Character Comparison** pattern.

The first string is used as a reference, and each character position is compared across all other strings. As soon as a mismatch is found, the common prefix ends, so the algorithm returns immediately.