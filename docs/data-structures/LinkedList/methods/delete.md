---
outline: deep
---

# **LinkedList&lt;T&gt;.delete**

## ****Overloads****

| Variant                                             | Definition                                                                    |
| --------------------------------------------------- | ----------------------------------------------------------------------------- |
| [delete(node: LinkedListNode<T>): void](1425238619) | Removes the first occurrence of a node from the `LinkedList<T>`.              |
| [delete(value: T): boolean](-1089209997)            | Removes the first occurrence of the specified value from the `LinkedList<T>`. |

#### <a name="1425238619"></a>delete(node: LinkedListNode<T>): void

Removes the first occurrence of a node from the `LinkedList<T>`.

## ****Parameters****

**node`LinkedListNode<T>`**: The `LinkedListNode<T>` to remove from the `LinkedList<T>`.

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

Removes the first occurrence of the specified value from the `LinkedList<T>`.

## ****Parameters****

**value`T`**: The value to remove from the `LinkedList<T>`.

## ****Returns****

`boolean`

`true` if the element containing value is successfully removed; otherwise, `false`. This method also returns `false` if value was not found in the original `LinkedList<T>`.

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

