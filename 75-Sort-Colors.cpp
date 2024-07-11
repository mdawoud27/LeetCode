class Solution {
public:
    void swap(int &n, int &m) {
        int temp = n;
        n = m;
        m = temp;
    }
    void sortColors(vector<int>& nums) { // bubble sort
        for (int i = 0; i < nums.size() - 1; i++) {
            for (int j = 0; j < nums.size() - i - 1; j++) {
                if (nums[j + 1] < nums[j]) 
                    swap(nums[j + 1], nums[j]);
            }
        }
    }
};