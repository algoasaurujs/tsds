---
outline: deep
---

# **PriorityQueue&lt;T&gt;.enqueue**

Adds an object to the end of the `PriorityQueue<T>`.

## ****Parameters****

**value`T`**: The object to add to the `PriorityQueue<T>`

## ****Example****

```typescript
const queue = new PriorityQueue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
```

## ****Remarks****

This method is an **O(1)** operation.

