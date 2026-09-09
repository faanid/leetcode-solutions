# 387. First Unique Character in a String

## Pattern

Hash Map / Frequency Counter

## Algorithm

1. Create a `Map` to store how many times each character appears.
2. Loop through the string and count the frequency of every character.
3. Loop through the string again from left to right.
4. If a character has a frequency of `1`, return its index.
5. If no unique character exists, return `-1`.

## Time Complexity

O(n)

We traverse the string twice, but `2n` is still O(n).

## Space Complexity

O(k)

Where `k` is the number of unique characters in the string.

## Pattern Note

This is a **Frequency Counter** pattern using a `Hash Map`.

The important idea is:

- First pass → count how many times each character appears.
- Second pass → find the first character whose count is `1`.

We need two passes because during the first pass we don't yet know whether a character will appear again later.