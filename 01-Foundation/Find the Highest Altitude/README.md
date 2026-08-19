# 1732. Find the Highest Altitude

## Pattern

Prefix Sum

---

## Algorithm

1. Initialize `point` to `0` to represent the current altitude.
2. Initialize `max` to `0` to store the highest altitude reached.
3. Traverse the `gain` array.
4. For each element:
   - Add the current gain value to `point` to calculate the new altitude.
   - Compare `point` with `max`.
   - Update `max` if the current altitude is higher.
5. Return `max` after processing all altitude changes.

---

## Time Complexity

**O(n)**

- The array is traversed once.
- Each element is processed with constant-time operations.

Overall: **O(n)**

---

## Space Complexity

**O(1)**

- Only two variables (`point` and `max`) are used.
- No additional data structures are created.