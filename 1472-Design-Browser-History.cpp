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

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory* obj = new BrowserHistory(homepage);
 * obj->visit(url);
 * string param_2 = obj->back(steps);
 * string param_3 = obj->forward(steps);
 */