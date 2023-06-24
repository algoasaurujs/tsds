---
outline: deep
---

# **LinkedList&lt;T&gt;.insertAfter**

## ****Overloads****

| Variant                                                                                                                            | Definition                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [insertAfter&lpar;node&colon; LinkedListNode&lt;T&gt;&comma; newNode&colon; T&rpar;&colon; void](-1337917229)                      | Adds a new _value_ after an existing _node_ in the `LinkedList<T>`.   |
| [insertAfter&lpar;node&colon; LinkedListNode&lt;T&gt;&comma; newNode&colon; LinkedListNode&lt;T&gt;&rpar;&colon; void](-256611467) | Adds a new _node_ or after an existing _node_ in the `LinkedList<T>`. |

#### <a name="-1337917229"></a>insertAfter&lpar;node&colon; LinkedListNode&lt;T&gt;&comma; newNode&colon; T&rpar;&colon; void

Adds a new _value_ after an existing _node_ in the `LinkedList<T>`.

## ****Parameters****

**node`LinkedListNode<T>`**: The `LinkedListNode<T>` after which to insert `newNode`.

**newNode`T`**: The new `value` to add to the `LinkedList<T>`.

#### <a name="-256611467"></a>insertAfter&lpar;node&colon; LinkedListNode&lt;T&gt;&comma; newNode&colon; LinkedListNode&lt;T&gt;&rpar;&colon; void

Adds a new _node_ or after an existing _node_ in the `LinkedList<T>`.

## ****Parameters****

**node`LinkedListNode<T>`**: The `LinkedListNode<T>` after which to insert `newNode`.

**newNode`LinkedListNode<T>`**: The new `LinkedListNode<T>` or `value` to add to the `LinkedList<T>`.

