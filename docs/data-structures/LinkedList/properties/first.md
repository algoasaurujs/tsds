---
outline: deep
---

# ****first****

Gets the first node of the `LinkedList<T>`.

## **Property Value**

`null | LinkedListNode<T>`

## **Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.first // => LinkListNode(1)
```

## **Remarks**

If the `LinkedList<T>` is empty, the _first_ and _last_ properties contain `null`.
Retrieving the value of this property is an **O(1)** operation.

