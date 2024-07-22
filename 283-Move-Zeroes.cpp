class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int j = 0; // pointer to non-zero elements of the array

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i]) {
                swap(nums[j], nums[i]);
                j++;
            }
        }
    }
};