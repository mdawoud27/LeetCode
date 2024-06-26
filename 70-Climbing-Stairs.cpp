class Solution {
public:
    int climbStairs(int n) {
        if (n == 1 || n == 2)
            return n;

        int n1 = 1, n2 = 2, result = 0;
        for (int i = 2; i < n; i++) {
            result = n1 + n2;
            n1 = n2;
            n2 = result;
        }
        return result;
    }
};