# 205. Isomorphic Strings

## Pattern

Hash Map / Two-Way Mapping

## Algorithm

1. Create two `Map`s:
   - `mapS` maps characters from `s` to characters in `t`.
   - `mapT` maps characters from `t` back to characters in `s`.
2. Traverse both strings at the same time.
3. For each pair of characters:
   - Check `mapS` to make sure the character from `s` always maps to the same character in `t`.
   - Check `mapT` to make sure the character from `t` always maps back to the same character in `s`.
4. If either mapping is inconsistent, return `false`.
5. Otherwise, store both mappings.
6. If the entire string is processed successfully, return `true`.

## Time Complexity

O(n)

The strings are traversed once, and `Map` operations such as `has()`, `get()`, and `set()` take O(1) average time.

## Space Complexity

O(n)

In the worst case, the maps can store a mapping for each character.

## Pattern Note

This problem uses a **Two-Way Mapping** pattern.

One map alone is not enough.

For example:

```text
s = "ab"
t = "cc"