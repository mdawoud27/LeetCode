class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        vector<int> sum(nums.size(), 0);

        for (int i = 0; i < nums.size(); i++) {
            if (i) sum[i] = nums[i] + sum[i - 1];
            else sum[i] = nums[i];
        }
        return sum;
    }
};