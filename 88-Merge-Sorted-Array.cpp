class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = 0, j = 0;
        vector<int> sortedArray;

        while (i < m && j < n) {
            if (nums1[i] <= nums2[j])
                sortedArray.push_back(nums1[i++]);
            else
                sortedArray.push_back(nums2[j++]);
        }
        while (i < m) sortedArray.push_back(nums1[i++]);
        while (j < n) sortedArray.push_back(nums2[j++]);

        nums1 = sortedArray;
    }
};