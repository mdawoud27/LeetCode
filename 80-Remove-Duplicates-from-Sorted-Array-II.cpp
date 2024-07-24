class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.size() <= 2) return nums.size();

        int i = 1, cnt = 1;
        for (int j = 1; j < nums.size(); j++) {
            if (nums[j] == nums[j - 1]) cnt++;
            else cnt = 1;

            if (cnt <= 2) {
                nums[i] = nums[j];
                i++;
            }
        }
        return i;
    }
};