---
outline: deep
---

# **Queue&lt;T&gt;.dequeue**

Removes and returns the object at the beginning of the `Queue<T>`.

## ****Returns****

`T`

The object that is removed from the beginning of the `Queue<T>`.

## ****Example****

```typescript
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue() // => 3
queue.length // => 2
```

## ****Remarks****

This method is an **O(1)** operation.

