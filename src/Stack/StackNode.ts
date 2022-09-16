export class StackNode<T = any> {
    constructor(public value: T, public next: null | StackNode<T> = null) { }
}