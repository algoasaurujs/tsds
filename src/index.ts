import { LinkedList, LinkedListNode } from './LinkedList/index';
import { Stack } from './Stack/index';
import { Queue } from './Queue/index';

const list = new LinkedList([5, 10, 15, 50, 0]);

console.log(list.toArray());

export { LinkedList, LinkedListNode, Stack, Queue };
