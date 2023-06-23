---
outline: deep
---

# ****length****

Gets the number of elements contained in the `Queue<T>`.

## **Property Value**

`number`

## **Example**

```typescript
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
```

## **Remarks**

Retrieving the value of this property is an O(1) operation.

