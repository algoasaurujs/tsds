---
outline: deep
---

# **LinkedList&lt;T&gt;.get**

Returns Node at the specified _index_

## ****Parameters****

**index`number`**: index of the Node **starts from 0**

## ****Returns****

`null | LinkedListNode<T>`

`LinkedListNode` of the specified index, if index is less than length; otherwise, `null`.

## ****Example****

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

const item = list.get(2)

const nullItem = list.get(10) // => null
```

## ****Remarks****

This method is an **O(n)** operation.

