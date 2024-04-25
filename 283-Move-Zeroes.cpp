class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        // 2 pointers
        int nonZeroIdx = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != 0) {
                swap(nums[nonZeroIdx], nums[i]);
                nonZeroIdx++;
            }
        }
    }
};

/*
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
*/
