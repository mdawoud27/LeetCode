#define IOS ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(0);
class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        IOS
        string mergedStr = "";
        int i = 0, j = 0;
        int minSize = min(word1.size(), word2.size());

        while (minSize--) {
            mergedStr += word1[i];
            mergedStr += word2[j];
            i++, j++;
        } // O(n)

        while (i < word1.size()) {
            mergedStr += word1[i];
            i++;
        } // O(m - n)

        while (j < word2.size()) {
            mergedStr += word2[j];
            j++;
        } // O(k - n)

        // Time Complexity: O(m + k)
        // Space Complexity: O(m + k) because the final str is a combination of
        // 2 strings.

        return mergedStr;
    }
};