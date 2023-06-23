---
outline: deep
---

# **PriorityQueue&lt;T&gt;.peek**

Returns the object at the beginning of the `PriorityQueue<T>` without removing it.

## ****Returns****

`T`

The object at the beginning of the `PriorityQueue<T>`.

## ****Example****

```typescript
const queue = new PriorityQueue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.peek() // => 3
```

## ****Remarks****

This method is an **O(1)** operation.

