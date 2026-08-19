# 242. Valid Anagram

## Pattern

Sorting

---

## Algorithm

1. Convert string `s` into an array of characters.
2. Sort the characters alphabetically.
3. Join the sorted characters back into a string.
4. Do the same process for string `t`.
5. Compare the two sorted strings:
   - If they are equal, return `true`.
   - Otherwise, return `false`.

---

## Time Complexity

**O(n log n)**

- `split()` takes **O(n)** to create an array.
- `sort()` takes **O(n log n)**.
- `join()` takes **O(n)**.
- Sorting is the dominant operation.

Overall: **O(n log n)**

---

## Space Complexity

**O(n)**

- `split()` creates character arrays for both strings.
- The sorted strings require additional memory proportional to the input size.

---

## Alternative Approach

A more optimized solution uses a **Hash Map / Frequency Counter**:

- Count how many times each character appears in `s`.
- Decrease the count while traversing `t`.
- If all counts become zero, the strings are anagrams.

### Complexity of Hash Map Solution

**Time Complexity:** O(n)  
**Space Complexity:** O(1) (because the alphabet size is limited)