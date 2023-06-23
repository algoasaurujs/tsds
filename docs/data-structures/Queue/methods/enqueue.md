---
outline: deep
---

# **Queue&lt;T&gt;.enqueue**

Adds an object to the end of the `Queue<T>`.

## ****Parameters****

**value`T`**: The object to add to the `Queue<T>`

## ****Example****

```typescript
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
```

## ****Remarks****

This method is an **O(1)** operation.

