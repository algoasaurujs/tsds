---
outline: deep
---

# **Tree&lt;T&gt;.insert**

Inserts a new node into the tree.
If no parent is specified, the new node becomes the root node.
If a parent is specified, the new node is inserted as a child of the parent.
Throws an error if a root node already exists and no parent is specified.

## ****Parameters****

**value`T | TreeNode<T>`**: The value to be stored in the new node.

**parent`TreeNode<T>`**: The parent node of the new node.

## ****Returns****

`TreeNode<T>`

The new node.

