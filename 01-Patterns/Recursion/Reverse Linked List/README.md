# 206. Reverse Linked List

## Pattern

Linked List / Iteration / Three Pointers

## Algorithm

1. Initialize `prev` to `null` and `current` to `head`.
2. While `current` is not `null`:
   - Save `current.next` in `next`.
   - Reverse the current node's pointer by setting `current.next = prev`.
   - Move `prev` to `current`.
   - Move `current` to the saved `next` node.
3. Return `prev`, which is the new head of the reversed list.

## Time Complexity

O(n)

Each node is visited exactly once.

## Space Complexity

O(1)

Only three pointers are used, regardless of the list size.

## Pattern Note

The key idea is to reverse one pointer at a time while preserving access to the remaining list.

The order of operations matters:

1. Save the next node.
2. Reverse the current pointer.
3. Move `prev` forward.
4. Move `current` forward using the saved next node.

Saving `next` first prevents losing access to the rest of the list.