---
outline: deep
---

# **Stack&lt;T&gt;.clear**

Removes all objects from the `Stack<T>`.

## ****Example****

```typescript
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.length // => 3
stack.clear()
stack.length // => 0
```

