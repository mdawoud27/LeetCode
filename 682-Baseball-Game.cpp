class Solution {
public:
    int calPoints(vector<string>& operations) {
        stack<int> records;
        int sum = 0;

        for (int i = 0; i < operations.size(); i++) {
            if (operations[i] == \C\) {
                records.pop();
            } else if (operations[i] == \D\) {
                records.push(records.top() * 2);
            } else if (operations[i] == \+\) {
                int top = records.top();
                records.pop();
                int newTop = records.top() + top;
                records.push(top);
                records.push(newTop);
            } else {
                records.push(stoi(operations[i]));
            }
        }

        while (!records.empty()) {
            sum += records.top();
            records.pop();
        }
        return sum;
    }
};