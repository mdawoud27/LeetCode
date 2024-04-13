class Solution(object):
    def findPeakElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        low = 0
        high = len(nums)

        while low < high:
            mid = (low + high) // 2

            if mid == len(nums) - 1 or nums[mid] > nums[mid + 1]:
                high = mid
            else:
                low = mid + 1

        return low
        