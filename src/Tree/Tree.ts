import { Queue } from '../Queue';
import { TreeNode } from './TreeNode';

export type CallBackFn<T> = (node: TreeNode<T>) => void;
export type SerializedNode<T> = {
  value: T;
  children: SerializedNode<T>[];
};

/**
 * A tree data structure.
 */
export class Tree<T = any> {
  private _root = new TreeNode<T>(null as T, this);

  /**
   * Tree Identifier
   * @internal
   */
  private _id = Symbol();

  /**
   * This method deserializes a serialized tree into a new Tree.
   * @param obj The serialized tree to deserialize.
   * @returns A new Tree that contains the same values and structure as the serialized tree.
   */
  static deserialize<T = any>(obj: SerializedNode<T>): Tree<T> {
    const tree = new Tree<T>();
    const deserializeNode = (node: SerializedNode<T>) => {
      const nodeInstance = new TreeNode<T>(node.value, tree);
      for (const child of node.children) {
        const childNode = deserializeNode(child);
        childNode.parent = nodeInstance;
        nodeInstance.children.append(childNode);
      }
      return nodeInstance;
    };
    if (!obj) return new Tree<T>();

    tree.insert(deserializeNode(obj), tree.root);
    return tree;
  }

  /**
   * Returns the root node of the tree.
   */
  get root(): TreeNode<T> {
    return this._root;
  }

  /**
   * Checks if the given node is a TreeNode
   * @param node The node to check.
   * @returns True if the node is a TreeNode, false otherwise.
   * @internal
   */
  isTreeNode(node: any): node is TreeNode<T> {
    return node instanceof TreeNode;
  }

  /**
   * Inserts a new node into the tree.
   * If no parent is specified, the new node becomes the root node.
   * If a parent is specified, the new node is inserted as a child of the parent.
   * Throws an error if a root node already exists and no parent is specified.
   * @param value The value to be stored in the new node.
   * @param parent The parent node of the new node.
   * @returns The new node.
   */
  insert(value: T | TreeNode<T>, parent: TreeNode<T>): TreeNode<T> {
    let newNode: TreeNode<T>;
    if (this.isTreeNode(value)) {
      newNode = value;
    } else {
      newNode = new TreeNode(value, this);
    }

    newNode.parent = parent;
    parent.children.append(newNode);
    return newNode;
  }

  /**
   * Deletes a node from the tree.
   * @param node The node to delete.
   * @returns The deleted node.
   */
  delete(node: TreeNode<T>): TreeNode<T> {
    if (!this._root) throw new Error('Tree is already empty.');
    if (!node.hasEqualTree(this._id)) throw new Error('Node not in tree.');
    if (node.isEqual(this._root)) throw new Error('Cannot delete root node.');
    node.detach();
    return node;
  }

  /**
   * Traverses the tree using DFS.
   * @param callback The callback function to execute on each node.
   * @param startNode The node to start the traversal from.
   */
  traverseDFS(
    callback: CallBackFn<T>,
    startNode: TreeNode<T> = this._root
  ): void {
    if (startNode) {
      callback(startNode);
      for (const childNode of startNode.children) {
        this.traverseDFS(callback, childNode);
      }
    }
  }

  /**
   * Traverses the tree using BFS.
   * @param callback The callback function to execute on each node.
   * @returns The tree.
   */
  traverseBFS(callback: CallBackFn<T>): void {
    if (!this._root) return;

    const queue: Queue<TreeNode<T>> = new Queue();
    queue.enqueue(this._root);

    while (queue.length > 0) {
      const node = queue.dequeue();
      callback(node);
      for (const childNode of node.children) {
        queue.enqueue(childNode);
      }
    }
  }

  /**
   * This code serializes a node and its children into an object.
   * @returns The serialized tree.
   */
  toObject(): SerializedNode<T> | null {
    return this.root ? this.serializeNode(this.root) : null;
  }

  /**
   * This code serializes a node and its children into an object.
   * @param node The node to serialize.
   * @returns The serialized node.
   * @internal
   */
  private serializeNode(node: TreeNode<T>): SerializedNode<T> {
    return {
      value: node.value,
      children: node.children.map(childNode => this.serializeNode(childNode)),
    };
  }
}
