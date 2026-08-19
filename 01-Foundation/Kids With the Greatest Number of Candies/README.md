# 1431. Kids With the Greatest Number of Candies

## Pattern

Two Pass Array Traversal

---

## Algorithm

1. Find the maximum number of candies any kid currently has.
2. Create an empty result array.
3. Traverse the array again.
4. For each kid, add `extraCandies` to their current candies.
5. If the total is greater than or equal to the maximum value found earlier, add `true` to the result; otherwise, add `false`.
6. Return the result array.

---

## Time Complexity

**O(n)**

- The first loop finds the maximum value.
- The second loop builds the result.
- Each loop traverses the array once.

Overall: **O(n)**

---

## Space Complexity

**O(n)**

- The result array stores one boolean value for each element in the input array.