#define IOS   ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(0);
class Solution {
public:
    bool isAnagram(string s, string t) {
        IOS
        sort(s.begin(), s.end());
        sort(t.begin(), t.end());

        return s == t;
    }
};