---
outline: deep
---

# **BinaryHeap&lt;T&gt;.push**

Inserts a new value into the BinaryHeap

## ****Parameters****

**value`T`**: The value that you want to insert into the BinaryHeap

## ****Example****

```typescript
const heap = new BinaryHeap<number>([10, 15, 20]);

heap.push(40)
heap.peek() => // 40
```

## ****Remarks****

This method is an O(log n) operation.

