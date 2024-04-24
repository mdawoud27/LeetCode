#define IOS ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(0);
class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        IOS
        string mergedStr = "";
        int minLength = min(word1.size(), word2.size());

        for (int i = 0; i < minLength; i++) {
            mergedStr += word1[i];
            mergedStr += word2[i];
        }

        mergedStr += word1.substr(minLength);
        mergedStr += word2.substr(minLength);

        return mergedStr;
    }
};