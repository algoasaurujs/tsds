---
outline: deep
---

# **LinkedList&lt;T&gt;.prepend**

Appends new Node at the beginning of the `LinkedList<T>`.

## ****Parameters****

**value`T | LinkedListNode<T>`**: value of the new node

## ****Example****

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.prepend(0)
list.length // => 5
list.first // => LinkListNode(0)
```

## ****Remarks****

This method is an **O(1)** operation.

