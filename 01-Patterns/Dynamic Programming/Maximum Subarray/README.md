# 53. Maximum Subarray

## Pattern

Dynamic Programming / Kadane's Algorithm

---

## Algorithm

1. Initialize `current` with the first element.
   - It represents the maximum sum of a subarray that ends at the current position.
2. Initialize `max` with the first element.
   - It stores the maximum subarray sum found so far.
3. Traverse the array starting from index `1`.
4. For each element, decide whether:
   - Start a new subarray from the current element.
   - Continue the previous subarray by adding the current element.
5. Store the better option in `current`:
   - `current = Math.max(nums[i], current + nums[i])`
6. Update `max` if `current` is greater.
7. Return `max`.

---

## Time Complexity

**O(n)**

- The array is traversed exactly once.
- Each element is processed in constant time.

---

## Space Complexity

**O(1)**

- Only two variables are used: `current` and `max`.
- No additional array or data structure is required.

---

## Pattern Note

This is a classic **Dynamic Programming** problem known as **Kadane's Algorithm**.

The key idea is to keep the best subarray sum ending at the current position.

At every element, we make a simple decision:

- Is it better to start a new subarray?
- Or is it better to extend the previous subarray?

This allows us to find the maximum subarray sum in **O(n)** time and **O(1)** extra space.