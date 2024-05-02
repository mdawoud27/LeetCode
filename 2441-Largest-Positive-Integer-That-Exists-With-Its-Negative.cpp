#define IOS ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(0);
class Solution {
public:
    int findMaxK(vector<int>& nums) {
        IOS
        int i = 0, j = nums.size() - 1;

        sort(nums.begin(), nums.end());
        while (i < j) {
            if (nums[i] * -1 == nums[j])
                return nums[j];
            if (nums[i] * -1 < nums[j]) j--;
            if (nums[i] * -1 > nums[j]) i++;
        }
        return -1;
    }
};