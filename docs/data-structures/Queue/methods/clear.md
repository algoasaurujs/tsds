---
outline: deep
---

# **Queue&lt;T&gt;.clear**

Removes all objects from the `Queue<T>`.

## ****Example****

```typescript
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
queue.clear()
queue.length // => 0
```

