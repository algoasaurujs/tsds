import { LinkedList } from '../LinkedList';

export class TreeNode<T> {
  children: LinkedList<TreeNode<T>>;

  constructor(public value: T, public parent: TreeNode<T> | null = null) {
    this.children = new LinkedList<TreeNode<T>>();
  }

  detach(): void {
    if (!this.parent) return;

    this.parent.children.delete(this);
    this.parent = null;
  }

  displayConsole(indent: number = 0): void {
    const indentation = " ".repeat(indent);
    console.log(indentation + this.value);

    for (const childNode of this.children) {
      childNode.displayConsole(indent + 4);
    }
  }
}
