class MyStack {
    // Using 2 queues
    queue<int> q1, q2;
public:
    MyStack() {}
    
    void push(int x) {
        q1.push(x);
    }
    
    int pop() {
        while (q1.size() > 1) {
            q2.push(q1.front());
            q1.pop();
        }
        int top = q1.front();
        q1.pop();
        swap(q1, q2);
        return top;
    }
    
    int top() {
        while (q1.size() > 1) {
            q2.push(q1.front());
            q1.pop();
        }
        int top = q1.front();
        q2.push(top);
        q1.pop();
        swap(q1, q2);
        return top;
    }
    
    bool empty() {
        return q1.empty();
    }
};

/*
class MyStack {
    // Using 1 queue
    queue<int> q1;
public:
    MyStack() {}

    void push(int x) { q1.push(x); }

    int pop() {
        int length = q1.size();
        while (length-- > 1) {
            q1.push(q1.front());
            q1.pop();
        }
        int top = q1.front();
        q1.pop();
        return top;
    }

    int top() {
        int length = q1.size();
        while (length-- > 1) {
            q1.push(q1.front());
            q1.pop();
        }
        int top = q1.front();
        q1.push(top);
        q1.pop();
        return top;
    }

    bool empty() { return q1.empty(); }
};

*/

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */
