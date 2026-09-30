class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        vector<int> ans(2 * nums.size());

        for (int i = 0; i < 2 * nums.size(); i++) {
            ans[i] = nums[i % nums.size()];
        }

        return ans;
    }
};