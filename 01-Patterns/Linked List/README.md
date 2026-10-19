# 876. Middle of the Linked List

## Pattern

Linked List / Fast and Slow Pointers

## Algorithm

1. Initialize two pointers, `slow` and `fast`, at the head of the linked list.
2. While `fast` and `fast.next` are not `null`:
   - Move `slow` one node forward.
   - Move `fast` two nodes forward.
3. When `fast` reaches the end of the list, `slow` points to the middle node.
4. Return `slow`.

## Time Complexity

O(n)

The fast pointer moves through the list at twice the speed of the slow pointer.

## Space Complexity

O(1)

Only two pointers are used.

## Pattern Note

The **Fast and Slow Pointers** pattern allows us to find the middle of a linked list in one pass without knowing its length beforehand.

- `slow` moves one step at a time.
- `fast` moves two steps at a time.

When `fast` reaches the end, `slow` is at the middle.

If the list has an even number of nodes, this implementation returns the **second middle node**.