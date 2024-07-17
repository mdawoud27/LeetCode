class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string mergedStr = "";
        int i = 0, j = 0;
        int minSize = min(word1.size(), word2.size());

        while (minSize--) {
            mergedStr += word1[i];
            mergedStr += word2[j];
            i++, j++;
        }

        while (i < word1.size()) {
            mergedStr += word1[i];
            i++;
        }

        while (j < word2.size()) {
            mergedStr += word2[j];
            j++;
        }

        return mergedStr;   
    }
};