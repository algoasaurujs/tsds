---
outline: deep
---

# **Stack&lt;T&gt;.pop**

Removes and returns the object at the top of the `Stack<T>`.

## ****Returns****

`T`

The object removed from the top of the `Stack<T>`.

## ****Example****

```typescript
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop() // => 3
stack.length // => 2
```

## ****Remarks****

This method is an O(1) operation.

