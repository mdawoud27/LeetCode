class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int total = 0, leftSum = 0;
        for (int i = 0; i < nums.size(); i++) total += nums[i];

        for (int i = 0; i < nums.size(); i++) {
            if (leftSum == total - leftSum - nums[i]) return i;
            leftSum += nums[i];
        }
        return -1;
    }
};