class Solution {
public:
    void swap(int& n, int& m) {
        int temp = n;
        n = m;
        m = temp;
    }

    void sortColors(vector<int>& nums) { // bubble sort
        bool flag = true; // to check if the array is already sorted

        for (int i = 0; i < nums.size() - 1; i++) {
            for (int j = 0; j < nums.size() - i - 1; j++) {
                if (nums[j] > nums[j + 1]) {
                    swap(nums[j], nums[j + 1]);
                    flag = false;
                }
            }
            if (flag)
                break; // means array is sorted (Not need to itrate any more)
        }
    }

    // void sortColors(vector<int>& nums) { // selection sort
    //     int minIdx; // 10, 20, 8

    //     for (int i = 0; i < nums.size() - 1; i++) {
    //         minIdx = i;
    //         for (int j = i + 1; j < nums.size(); j++) {
    //             if (nums[j] < nums[minIdx]) {
    //                 minIdx = j;
    //             }
    //         }
    //         swap(nums[minIdx], nums[i]);
    //     }
    // }
};
