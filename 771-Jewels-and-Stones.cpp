class Solution {
public:
    int numJewelsInStones(string jewels, string stones) {
        bool isJewel[128] = {};
        int count = 0;

        for (char j : jewels) isJewel[j] = true;

        for (char s : stones) {
            if (isJewel[s]) count++;
        }
        return count;
    }
};