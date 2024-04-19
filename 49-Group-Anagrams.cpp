#define IOS ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(0);
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        IOS 
        unordered_map<string, vector<string>> mp;

        for (auto& str : strs) {
            string word = str;
            sort(word.begin(), word.end());
            mp[word].push_back(str);
        }

        vector<vector<string>> result;
        for (auto& kv : mp)
            result.push_back(kv.second);

        return result;
    }
};