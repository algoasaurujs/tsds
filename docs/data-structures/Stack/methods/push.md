---
outline: deep
---

# **Stack&lt;T&gt;.push**

Inserts an object at the top of the `Stack<T>`.

## ****Parameters****

**value`T`**: The object to push onto the `Stack<T>`.

## ****Example****

```typescript
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.length // => 3
```

## ****Remarks****

This method is an O(1) operation.

