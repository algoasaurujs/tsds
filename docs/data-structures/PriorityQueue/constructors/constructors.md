---
outline: deep
---

# **PriorityQueue&lt;T&gt;.constructor**

Creates a PriorityQueue collection.

## ****Parameters****

**initialValue`T[]`**: You can pass an array as initialValue to the constructor

**comparator`CompareFn<T>`**: Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. if omitted, the default comparator would create a max PriorityQueue.

