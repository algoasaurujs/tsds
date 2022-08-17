import { Queue } from '../src/Queue';

describe('Queue', () => {
  it('Queue instantiated successfully', () => {
    const queue = new Queue();
    expect(queue.length).toBe(0);
  });

  it('can inserts an object', () => {
    const queue = new Queue();
    queue.enqueue('Hello');
    expect(queue.length).toBe(1);
  });

  it('peek works', () => {
    const queue = new Queue();
    queue.enqueue('Hello');
    const object = queue.peek();
    expect(object).toBe('Hello');
    expect(queue.length).toBe(1);
  });

  it('can remove and return the object', () => {
    const queue = new Queue();
    queue.enqueue('Hello');
    const object = queue.dequeue();
    expect(object).toBe('Hello');
    expect(queue.length).toBe(0);
  });

  it('can find if object exist', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.includes(2)).toBe(true);
    expect(queue.includes(10)).toBe(false);

    const emptyQueue = new Queue();
    expect(emptyQueue.includes(1)).toBe(false);
  });

  it('can clear the Queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.clear();
    expect(queue.length).toBe(0);
  });

  it('can export in an array', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.toArray()).toEqual([1, 2, 3, 4]);
  });

  it('can iterate', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    const array: number[] = [];
    for (const object of queue) {
      array.push(object);
    }
    expect(array).toEqual([1, 2, 3, 4]);
  });
});
