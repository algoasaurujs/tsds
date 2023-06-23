---
outline: deep
---

# **LinkedList&lt;T&gt;.delete**

## ****Overloads****

| Variant                                              | Definition                                                                    |
| ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| [delete(node: LinkedListNode&lt;T&gt;): void](#1425238619) | Removes the first occurrence of a node from the `LinkedList&lt;T&gt;`.              |
| [delete(value: T): boolean](#-1089209997)            | Removes the first occurrence of the specified value from the `LinkedList&lt;T&gt;`. |

#### <a name="1425238619"></a>delete(node: LinkedListNode&lt;T&gt;): void

Removes the first occurrence of a node from the `LinkedList&lt;T&gt;`.

## ****Parameters****

**node`LinkedListNode&lt;T&gt;`**: The `LinkedListNode&lt;T&gt;` to remove from the `LinkedList&lt;T&gt;`.

## ****Example****

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.delete(4)
list.length // => 3
list.last // => LinkListNode(3)
```

## ****Remarks****

This method is an **O(n)** operation.

#### <a name="-1089209997"></a>delete(value: T): boolean

Removes the first occurrence of the specified value from the `LinkedList&lt;T&gt;`.

## ****Parameters****

**value`T`**: The value to remove from the `LinkedList&lt;T&gt;`.

## ****Returns****

`boolean`

`true` if the element containing value is successfully removed; otherwise, `false`. This method also returns `false` if value was not found in the original `LinkedList&lt;T&gt;`.

## ****Example****

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.delete(4)
list.length // => 3
list.last // => LinkListNode(3)
```

## ****Remarks****

This method is an **O(n)** operation.

