class Solution {
public:
    int numJewelsInStones(string jewels, string stones) {
        map<char, bool> jewelsMap;
        int count = 0;

        for (char j : jewels) jewelsMap[j] = true;

        for (char s : stones) {
            if (jewelsMap[s]) count++;
        }
        return count;
    }
};