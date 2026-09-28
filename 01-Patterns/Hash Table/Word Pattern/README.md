# 290. Word Pattern

## Pattern

Hash Map / Two-Way Mapping

## Algorithm

1. Split the string `s` into an array of words.
2. Check whether the number of words matches the length of `pattern`.
3. Create two maps:
   - `mapPattern` maps each pattern character to a word.
   - `mapWord` maps each word back to a pattern character.
4. Traverse the pattern and words at the same time.
5. Check whether the existing mapping from character to word is consistent.
6. Check whether the existing mapping from word to character is consistent.
7. If either mapping is inconsistent, return `false`.
8. Otherwise, store both mappings.
9. If the entire input is processed successfully, return `true`.

## Time Complexity

O(n)

Where `n` is the number of characters in `pattern` / words being processed.

Each element is processed once, and `Map` operations take O(1) average time.

## Space Complexity

O(n)

The maps can store up to `n` unique characters and words.

## Pattern Note

This problem uses the same **Two-Way Mapping** pattern as `Isomorphic Strings`.

We need both directions:

```text
pattern → word
word → pattern
