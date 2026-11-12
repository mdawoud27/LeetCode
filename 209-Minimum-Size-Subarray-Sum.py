class Solution:
    def minSubArrayLen(self, target: int, nums: list[int]) -> int:
        s, left = 0, 0
        min_len = float("inf")

        for i in range(len(nums)):
            s += nums[i]

            while s >= target:
                min_len = min(min_len, i - left + 1)
                s -= nums[left]
                left += 1

        return 0 if min_len == float("inf") else min_len
        