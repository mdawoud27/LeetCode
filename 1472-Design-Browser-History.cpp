#define IOS ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(0);
class BrowserHistory {
    vector<string> history;
   int idx;
public:
    BrowserHistory(string homepage) {
        history.push_back(homepage);
        idx = 1;
    }

    void visit(string url) {
        IOS
        history.resize(idx);
        idx++;
        history.push_back(url);
    }

    string back(int steps) {
        IOS
        idx = max(idx - steps, 1);
        return history[idx - 1];
    }

    string forward(int steps) {
        IOS
        idx = min(idx + steps, int(history.size()));
        return history[idx - 1];
    }
};

// Solution using stacks
/*
#define IOS ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(0);
class BrowserHistory {
    stack<string> sites, history;
    int length;
public:
    BrowserHistory(string homepage) {
        sites.push(homepage);
    }

    void visit(string url) {
        IOS
        while (!history.empty()) history.pop();
        sites.push(url);
    }

    string back(int steps) {
        IOS
        if (steps > sites.size() - 1) length = sites.size() - 1;
        else length = steps;

        for (int i = 0; i < length; i++) {
            history.push(sites.top());
            sites.pop();
        }
        return sites.top();
    }

    string forward(int steps) {
        IOS
        if (steps > history.size()) length = history.size();
        else length = steps;

        for (int i = 0; i < length; i++) {
            sites.push(history.top());
            history.pop();
        }
        return sites.top();
    }
};

*/

/* There another solution using doubly linkedlist*/
