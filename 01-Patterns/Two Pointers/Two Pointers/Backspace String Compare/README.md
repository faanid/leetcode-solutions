# 844. Backspace String Compare

## Pattern

Two Pointers

## Algorithm

1. Start two pointers from the end of both strings.
2. Keep a separate `backspaceCount` for each string.
3. Move the pointer from right to left:
   - If the current character is `#`, increase the backspace count.
   - If there are pending backspaces, skip the current character and decrease the count.
   - Otherwise, stop because the current character is a valid character.
4. Do the same for the second string.
5. Compare the two valid characters.
6. If they are different, return `false`.
7. If they are equal, move both pointers one position to the left.
8. Continue until both strings are completely processed.
9. If all valid characters match, return `true`.

## Time Complexity

O(n + m)

Where:
- `n` = length of `s`
- `m` = length of `t`

Each character is processed at most once.

## Space Complexity

O(1)

Only pointers and backspace counters are used.

## Pattern Note

This is a **Two Pointers** problem.

The important idea is to process both strings **from right to left**.

When we see `#`, we know it will delete the closest valid character before it. By keeping a `backspaceCount`, we can skip deleted characters without creating a new string.

For example:

s = "ab#c"

Starting from the right:

- `c` → valid character
- `#` → one backspace
- `b` → deleted by `#`
- `a` → valid character

So the final string is:

"ac"

This approach avoids creating modified strings and uses O(1) extra space.