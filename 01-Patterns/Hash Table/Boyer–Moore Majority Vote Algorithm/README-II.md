# 229. Majority Element II

## Pattern

Boyer-Moore Voting Algorithm (Extended) / Two Candidates

## Algorithm

1. Initialize two candidates and two counters.
2. Traverse the array:
   - If the current number matches `candidate1`, increment `count1`.
   - If it matches `candidate2`, increment `count2`.
   - If `count1` is zero, assign the current number to `candidate1`.
   - Otherwise, if `count2` is zero, assign it to `candidate2`.
   - Otherwise, decrement both counters.
3. After the first pass, the two candidates are the only possible elements that may appear more than `n / 3` times.
4. Traverse the array again and count the actual occurrences of both candidates.
5. Calculate the threshold using `Math.floor(n / 3)`.
6. Add each candidate to the result if its actual frequency is greater than the threshold.
7. Return the result array.

## Time Complexity

O(n)

We traverse the array twice. Both passes take O(n) time.

## Space Complexity

O(1)

Only two candidates, two counters, and a constant number of variables are used. The result contains at most two elements.

## Pattern Note

The extended Boyer-Moore Voting Algorithm works because an array can contain at most two elements appearing more than n / 3 times.

The key idea is cancellation:

When three different values are encountered, we decrease both candidate counters.

This is equivalent to removing three different elements from consideration.

After the first pass, candidates are only potential answers, so we must verify their actual frequencies in the second pass.