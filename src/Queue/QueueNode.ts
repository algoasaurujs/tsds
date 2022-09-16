export class QueueNode<T = any> {
  constructor(public value: T, public next: null | QueueNode<T> = null) {}
}
