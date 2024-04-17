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

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory* obj = new BrowserHistory(homepage);
 * obj->visit(url);
 * string param_2 = obj->back(steps);
 * string param_3 = obj->forward(steps);
 */