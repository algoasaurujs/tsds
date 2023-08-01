import { Tree } from './Tree';
import { TreeNode } from './TreeNode';

export { Tree, TreeNode };

const tree = Tree.deserialize({
  value: 'root',
  children: [
    {
      value: 'child1',
      children: [
        {
          value: 'grandchild1',
          children: [],
        },
        {
          value: 'grandchild2',
          children: [],
        },
      ],
    },
    {
      value: 'child2',
      children: [],
    },
  ],
});

tree.root?.displayConsole();
