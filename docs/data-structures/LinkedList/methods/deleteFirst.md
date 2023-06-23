---
outline: deep
---

# **LinkedList&lt;T&gt;.deleteFirst**

Removes the node at the start of the `LinkedList<T>`.

## ****Example****

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.deleteFirst();
list.length // => 3
list.first // => LinkListNode(2)
```

## ****Remarks****

This method is an **O(1)** operation.

