class Solution {
public:
    int findMiddleIndex(vector<int>& nums) {
        int preSum = 0;
        int postSum = accumulate(nums.begin(), nums.end(), 0);

        for (int i = 0; i < nums.size(); i++) {
            postSum -= nums[i];
            if (postSum == preSum) // pre = post - pre - nums[i]
                return i;

            preSum += nums[i];
        }
        return -1;
    }
};