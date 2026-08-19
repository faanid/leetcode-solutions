# 1773. Count Items Matching a Rule

## Pattern

Array Traversal / Conditional Matching

---

## Algorithm

1. Create a variable `count` to store the number of matching items.
2. Determine which index corresponds to `ruleKey`:
   - `"type"` → index `0`
   - `"color"` → index `1`
   - `"name"` → index `2`
3. Traverse the `items` array.
4. For each item:
   - Check whether the value at the selected index matches `ruleValue`.
   - If it matches, increment `count`.
5. Return the final count.

---

## Time Complexity

**O(n)**

- The array is traversed once.
- Each comparison takes constant time.

Overall: **O(n)**

---

## Space Complexity

**O(1)**

- Only a few variables (`count` and `index`) are used.
- No additional data structures are created.