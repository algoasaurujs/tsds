---
outline: deep
---

# ****size****

Gets the number of elements contained in the `BinaryHeap<T>`.

## **Property Value**

`number`

## **Example**

```typescript
const heap = new BinaryHeap<number>();

heap.push(1);
heap.push(2);
heap.push(3);

heap.size // => 3
```

## **Remarks**

Retrieving the value of this property is an O(1) operation.

