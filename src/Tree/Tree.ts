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
  private _root: TreeNode<T> | null = null;

  constructor() {}

  /**
   * This method deserializes a serialized tree into a new Tree.
   *
   * @param obj The serialized tree to deserialize.
   * @returns A new Tree that contains the same values and structure as the serialized tree.
   */
  static deserialize<T = any>(obj: SerializedNode<T>): Tree<T> {
    const deserializeNode = (node: SerializedNode<T>) => {
      const nodeInstance = new TreeNode<T>(node.value);
      for (const child of node.children) {
        const childNode = deserializeNode(child);
        childNode.parent = nodeInstance;
        nodeInstance.children.append(childNode);
      }
      return nodeInstance;
    };
    if (!obj) return new Tree<T>();

    const tree = new Tree<T>();
    tree.insert(deserializeNode(obj));
    return tree;
  }

  /**
   * Returns the root node of the tree.
   */
  get root(): TreeNode<T> | null {
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
  insert(value: T | TreeNode<T>, parent?: TreeNode<T>): TreeNode<T> {
    let newNode: TreeNode<T>;
    if (this.isTreeNode(value)) {
      newNode = value;
    } else {
      newNode = new TreeNode(value);
    }

    if (!parent) {
      if (this._root) throw new Error('Root node already exists.');
      this._root = newNode;
      return newNode;
    }

    newNode.parent = parent;
    parent.children.append(newNode);
    return newNode;
  }

  traverseDFS(
    callback: CallBackFn<T>,
    startNode: TreeNode<T> | null = this._root
  ): void {
    if (startNode) {
      callback(startNode);
      for (const childNode of startNode.children) {
        this.traverseDFS(callback, childNode);
      }
    }
  }

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
   */
  private serializeNode(node: TreeNode<T> | null): SerializedNode<T> | null {
    if (!node) return null;

    const serializedNode: any = {
      value: node.value,
      children: node.children.map(childNode => this.serializeNode(childNode)),
    };

    return serializedNode;
  }
}
