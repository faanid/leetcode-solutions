# 383. Ransom Note

## Pattern

Hash Map / Frequency Counter

## Algorithm

1. Create a `Map` to store the frequency of each character in `magazine`.
2. Loop through `magazine` and count how many times each character appears.
3. Loop through `ransomNote`.
4. For each character, check whether it exists in the map and still has an available count.
5. If it is available, decrease its count by `1`.
6. If it does not exist or its count is already `0`, return `false`.
7. If all characters can be constructed, return `true`.

## Time Complexity

O(n + m)

Where:
- `n` = length of `magazine`
- `m` = length of `ransomNote`

## Space Complexity

O(k)

Where `k` is the number of unique characters in `magazine`.

## Pattern Note

This is another **Frequency Counter** problem.

The key idea is that the characters in `magazine` are limited resources.

For example:

magazine = "aab"

Frequency:

a → 2  
b → 1

If `ransomNote` needs `"aba"`, we consume one `a`, one `b`, and one more `a`.

If it needs `"abb"`, the second `b` cannot be provided, so we return `false`.