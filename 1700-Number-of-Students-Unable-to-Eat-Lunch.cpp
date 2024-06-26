#define IOS ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(0);
class Solution {
public:
    int countStudents(vector<int>& students, vector<int>& sandwiches) {
        IOS
        while (!students.empty() && find(students.begin(), students.end(), sandwiches[0]) != students.end()) {
            if (students[0] == sandwiches.front()) {
                students.erase(students.begin());
                sandwiches.erase(sandwiches.begin());
            } else {
                students.push_back(students.front());
                students.erase(students.begin());
            }
        }
        return students.size();
    }
};

/*
The purpose of the condition `find(students.begin(), students.end(), sandwiches[0]) != students.end()`
is to check whether at least one student in the queue prefers the type of sandwich at the top of the stack.
*/
