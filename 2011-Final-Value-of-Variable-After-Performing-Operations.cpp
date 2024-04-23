class Solution {
public:
    int finalValueAfterOperations(vector<string>& operations) {
        int x = 0;

        for (auto ope : operations) {
            if (ope[1] == '-') x--;
            else x++;
        }
        return x;
    }
};