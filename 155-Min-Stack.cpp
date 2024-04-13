class MinStack {
private:
    stack<int> minStack;
    stack<int> baseStack;

public:
    MinStack() {}
    
    void push(int val) {
        baseStack.push(val);
        if (minStack.empty() || val <= minStack.top())
            minStack.push(val);
    }
    
    void pop() {
        if (baseStack.empty()) return;

        int topVal = baseStack.top();
        baseStack.pop();
        if (topVal == minStack.top())
            minStack.pop();
    }
    
    int top() {
        if (baseStack.empty()) return -1;
        return baseStack.top();
    }
    
    int getMin() {
        if (minStack.empty()) return -1;
        return minStack.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */