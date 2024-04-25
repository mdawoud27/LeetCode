class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int noZeroIdx = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != 0) {
                nums[noZeroIdx++] = nums[i];
            }
        }

        while (noZeroIdx < nums.size())
            nums[noZeroIdx++] = 0;
    }
};