import { Tree } from './Tree';
import { LinkedList } from '../LinkedList';

export class TreeNode<T = any> {
  private _id: Symbol;
  children: LinkedList<TreeNode<T>>;

  constructor(
    public value: T,
    private _tree: Tree<T>,
    public parent: TreeNode<T> | null = null,
    private _treeId: Symbol | null = null
  ) {
    this.children = new LinkedList<TreeNode<T>>();
    this._id = Symbol();
  }

  /**
   * The tree that the node belongs to.
   */
  get tree(): Tree<T> {
    return this._tree;
  }

  /**
   * checks if the node is equal to another node.
   * @param node - The node to check.
   * @returns True if the nodes are equal, false otherwise.
   */
  isEqual(node: TreeNode<T>): boolean {
    return this._id === node._id;
  }

  /**
   * checks if node is in the same tree with provided id.
   * @param id - The id of the tree to check.
   * @returns True if the node is in the tree, false otherwise.
   */
  hasEqualTree(id: Symbol): boolean {
    return id && this._treeId === id;
  }

  /**
   * checks if node is in a tree.
   * @returns True if the node is in a tree, false otherwise.
   */
  hasList(): boolean {
    // If treeId is null, the item is not in a tree.
    return this._treeId !== null;
  }

  /**
   * Detaches the node from its tree.
   */
  detach(): void {
    if (!this.parent) return;

    this.parent.children.delete(this);
    this.parent = null;
    this._treeId = null;
  }

  displayConsole(indent: number = 0): void {
    const indentation = ' '.repeat(indent);
    console.log(indentation + this.value);

    for (const childNode of this.children) {
      childNode.displayConsole(indent + 4);
    }
  }
}
