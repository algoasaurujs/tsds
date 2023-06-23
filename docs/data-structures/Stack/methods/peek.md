---
outline: deep
---

# **Stack&lt;T&gt;.peek**

Returns the object at the top of the `Stack<T>` without removing it.

## ****Returns****

`T`

The object at the top of the `Stack<T>`.

## ****Example****

```typescript
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.peek() // => 3
```

## ****Remarks****

This method is an O(1) operation.

