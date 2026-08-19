# 20. Valid Parentheses

## Pattern

Stack

---

## Algorithm

1. Create an empty `stack`.
2. Traverse the string character by character.
3. If the current character is an opening bracket:
   - `(`
   - `{`
   - `[`
   
   push it onto the stack.
4. If the current character is a closing bracket:
   - If the stack is empty, return `false`.
   - Get the last opening bracket from the stack.
   - Check whether it matches the current closing bracket.
   - If it does not match, return `false`.
   - If it matches, remove it from the stack using `pop()`.
5. After processing the entire string, check the stack:
   - Empty stack → all brackets were matched → `true`
   - Non-empty stack → some opening brackets were not closed → `false`

---

## Time Complexity

**O(n)**

- The string is traversed once.
- Each bracket is pushed to or removed from the stack at most once.

Overall: **O(n)**

---

## Space Complexity

**O(n)**

- In the worst case, all characters can be opening brackets.
- The stack can therefore contain up to `n` elements.

---

## Pattern Note

This is a classic **Stack** problem.

The important idea is **Last In, First Out (LIFO)**. The most recently opened bracket must be the first one to be closed.

For example:

`({[]})`

The stack keeps track of the currently open brackets:

```text
(     → [(]
{     → [(, {]
[     → [(, {, []
]     → [(, {]      → pop [
}     → [(]         → pop {
)     → []          → pop (
```

If a closing bracket does not match the last opening bracket, the string is invalid.