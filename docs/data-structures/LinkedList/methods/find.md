---
outline: deep
---

# **LinkedList&lt;T&gt;.find**

Finds the first node that contains the specified value.

## ****Parameters****

**value`T`**: value of the node we want to find

## ****Returns****

`null | LinkedListNode<T>`

`LinkedListNode` if there is a value otherwise `null`

## ****Example****

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

const item = list.find(2)

const nullItem = list.find(10) // => null
```

## ****Remarks****

This method is an **O(n)** operation.

