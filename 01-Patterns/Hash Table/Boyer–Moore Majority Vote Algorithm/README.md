# 169. Majority Element

## Pattern

Boyer-Moore Voting Algorithm

---

## Algorithm

1. Initialize:
   - `candidate` with the first element.
   - `count` with `0`.
2. Traverse the array.
3. If `count` becomes `0`, choose the current element as the new `candidate`.
4. If the current element is equal to `candidate`, increase `count`.
5. Otherwise, decrease `count`.
6. After processing the entire array, return `candidate`.

The idea is that every occurrence of a different number cancels out one occurrence of the current candidate.

Because the problem guarantees that a majority element exists, the remaining candidate is the majority element.

---

## Time Complexity

**O(n)**

- The array is traversed exactly once.
- Each element requires only constant-time operations.

---

## Space Complexity

**O(1)**

- Only `candidate` and `count` are used.
- No additional data structures are required.

---

## Pattern Note

This problem uses the **Boyer-Moore Voting Algorithm**.

The key idea is **cancellation**:

- Same as the candidate → `count++`
- Different from the candidate → `count--`
- `count === 0` → choose a new candidate

Since the majority element appears more than `n / 2` times, it cannot be completely cancelled by all other elements.