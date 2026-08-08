# 58. Length of Last Word

## Pattern

String Processing

---

## Algorithm

1. Use `trim()` to remove leading and trailing spaces.
2. Split the string into words using `" "`.
3. Use `filter()` to remove any empty strings caused by multiple spaces.
4. Access the last element of the resulting array.
5. Return the length of the last word.

---

## Time Complexity

**O(n)**

- `trim()`, `split()`, and `filter()` process the input string.
- The string is processed linearly.

Overall: **O(n)**

---

## Space Complexity

**O(n)**

- `split()` creates an array containing the words.
- `filter()` creates another array.
- The extra space is proportional to the input size.

---

## Alternative Approach

A more space-efficient solution is to traverse the string from right to left:

1. Skip trailing spaces.
2. Start counting characters once the last word begins.
3. Stop when another space is reached.

### Complexity of the Alternative

**Time Complexity:** O(n)  
**Space Complexity:** O(1)
