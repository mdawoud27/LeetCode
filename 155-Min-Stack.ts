class MinStack {
    private stack: number[];
    private minStack: number[];
    
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value: number): void {
        this.stack.push(value);

        if (this.minStack.length === 0 || this.getMin() >= value) {
            this.minStack.push(value);
        }
    }

    pop(): void {
        const removed = this.stack.pop();

        if (removed === this.getMin()) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */