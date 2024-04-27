class Solution {
public:
    int numberOfSpecialChars(string word) {
        unordered_map<char, int> mp;
        int cnt = 0;

        for (char c : word)
            mp[c]++;

        for (auto kv : mp) {
            if (mp.count(tolower(kv.first)) && (mp.count(toupper(kv.first))))
                cnt++;
        }
        return cnt / 2;
    }
};