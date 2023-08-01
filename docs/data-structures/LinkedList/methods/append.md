---
outline: deep
---

# **LinkedList&lt;T&gt;.append**

Adds a new node or value at the end of the `LinkedList<T>`.

## ****Parameters****

**value`T | LinkedListNode<T>`**: value of the new node.

## ****Example****

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.append(5)
list.length // => 5
list.last // => LinkListNode(5)
```

## ****Remarks****

This method is an **O(1)** operation.

